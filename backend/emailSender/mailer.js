const nodemailer = require('nodemailer');
const dns = require('dns').promises;

const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure =
  String(process.env.SMTP_SECURE || 'true').toLowerCase() === 'true';

let transporter;

const getTransporter = async () => {
  if (transporter) {
    return transporter;
  }

  const ipv4Addresses = await dns.resolve4(process.env.SMTP_HOST);

  if (!ipv4Addresses.length) {
    throw new Error('Nem sikerült IPv4 címet találni az SMTP szerverhez.');
  }

  transporter = nodemailer.createTransport({
    host: ipv4Addresses[0],
    port: smtpPort,
    secure: smtpSecure,

    tls: {
      servername: process.env.SMTP_HOST
    },

    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  return transporter;
};

const defaultFrom =
  process.env.EMAIL_FROM ||
  'Nyiri Zoltán Portfólio <zoltan.nyiri02@gmail.com>';

const sendMail = async ({ to, subject, html, text, replyTo, from }) => {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    throw new Error(
      'SMTP nincs beállítva.'
    );
  }

  const mailTransporter = await getTransporter();

  return mailTransporter.sendMail({
    from: from || defaultFrom,
    to,
    subject,
    html,
    text,
    ...(replyTo ? { replyTo } : {})
  });
};

module.exports = { sendMail };