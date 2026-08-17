const express = require('express');
const router = express.Router();

const { sendContactEmail } = require('../services/EmailService');

router.post('/contact', async (req, res) => {
  try {
    const { fullName, emailAddress, subject, message } = req.body;
    if (!fullName || !emailAddress || !subject || !message) {
      return res.status(400).json({
        message: 'Minden mező kitöltése kötelező.'
      })
    }
    await sendContactEmail({ fullName, emailAddress, subject, message });
    res.status(200).json({ message: 'Email elküldve!' });
  } catch (error) {
    console.error('Hiba az email küldésekor:', error);
    res.status(500).json({ message: 'Hiba történt az email küldésekor.' });
  }
});

module.exports = router;