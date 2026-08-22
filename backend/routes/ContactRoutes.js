const express = require('express');

const { sendContactEmail } = require('../services/emailService');

const router = express.Router();
const requestLog = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidString = (value, minLength, maxLength) => (
  typeof value === 'string'
  && value.trim().length >= minLength
  && value.trim().length <= maxLength
);

const isRateLimited = (clientId) => {
  const now = Date.now();
  const recentRequests = (requestLog.get(clientId) || [])
    .filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(clientId, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(clientId, recentRequests);

  if (requestLog.size > 1000) {
    for (const [key, timestamps] of requestLog.entries()) {
      if (!timestamps.some((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)) {
        requestLog.delete(key);
      }
    }
  }

  return false;
};

router.post('/contact', async (req, res) => {
  try {
    const {
      fullName,
      emailAddress,
      subject,
      message,
      privacyAccepted,
      website,
    } = req.body || {};

    // Honeypot: bots commonly fill this visually hidden field.
    if (typeof website === 'string' && website.trim()) {
      return res.status(200).json({ message: 'Email elküldve!' });
    }

    const clientId = req.ip || req.socket.remoteAddress || 'unknown';
    if (isRateLimited(clientId)) {
      res.set('Retry-After', String(RATE_LIMIT_WINDOW_MS / 1000));
      return res.status(429).json({
        message: 'Túl sok kérés. Kérlek, próbáld újra később.'
      });
    }

    const normalizedEmail = typeof emailAddress === 'string' ? emailAddress.trim() : '';
    const isValidPayload = (
      isValidString(fullName, 2, 100)
      && EMAIL_PATTERN.test(normalizedEmail)
      && normalizedEmail.length <= 254
      && isValidString(subject, 3, 150)
      && !/[\r\n]/.test(subject)
      && isValidString(message, 10, 5000)
      && privacyAccepted === true
    );

    if (!isValidPayload) {
      return res.status(400).json({
        message: 'A megadott adatok érvénytelenek vagy hiányosak.'
      });
    }

    await sendContactEmail({
      fullName: fullName.trim(),
      emailAddress: normalizedEmail,
      subject: subject.trim(),
      message: message.trim(),
    });

    return res.status(200).json({ message: 'Email elküldve!' });
  } catch (error) {
    console.error('Hiba az email küldésekor:', error);
    return res.status(500).json({ message: 'Hiba történt az email küldésekor.' });
  }
});

module.exports = router;
