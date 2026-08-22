const { sendMail } = require('../emailSender/mailer');

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const sendContactEmail = async ({
  fullName,
  emailAddress,
  subject,
  message
}) => {
  const safeFullName = escapeHtml(fullName);
  const safeEmailAddress = escapeHtml(emailAddress);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br>');

  return sendMail({
    to: process.env.CONTACT_EMAIL,
    subject: `Kapcsolatfelvétel: ${subject}`,
    replyTo: emailAddress,
    text: `
      Név: ${fullName}
      Email: ${emailAddress}

      Üzenet:
      ${message}
          `,

          html: `
            <h2>Új kapcsolatfelvétel</h2>

            <p><strong>Név:</strong> ${safeFullName}</p>
            <p><strong>Email:</strong> ${safeEmailAddress}</p>
            <p><strong>Tárgy:</strong> ${safeSubject}</p>

            <hr />

            <p>${safeMessage}</p>
          `
  })
}

module.exports = { sendContactEmail };
