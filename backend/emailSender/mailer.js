const nodemailer = require('nodemailer');
const dns = require('dns');

const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = String(process.env.SMTP_SECURE || 'true').toLowerCase() === 'true';

const ipv4Lookup = (hostname, options, callback) => {
  dns.lookup(
    hostname,
    {
      ...options,
      family: 4,
      all: false
    },
    callback
  );
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpSecure,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },

  lookup: ipv4Lookup,

  logger: true,
  transactionLog: true
});

const defaultFrom = process.env.EMAIL_FROM || 'Turazz Velunk <no-reply@turazzvelunk.local>';

const sendMail = async ({ to, subject, html, text, replyTo, from }) => {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        throw new Error('SMTP nincs beallitva. Ellenorizd az SMTP_* env valtozokat.');
    }
    return transporter.sendMail({
        from: from || defaultFrom,
        to,
        subject,
        html,
        text,
        ...(replyTo ? { replyTo } : {})
    });
};

module.exports = { sendMail };