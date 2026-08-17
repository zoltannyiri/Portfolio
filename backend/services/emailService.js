const { sendMail } = require('../emailSender/mailer');

const sendContactEmail = async ({
  fullName,
  emailAddress,
  subject,
  message
}) => {
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

            <p><strong>Név:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${emailAddress}</p>
            <p><strong>Tárgy:</strong> ${subject}</p>

            <hr />

            <p>${message}</p>
          `
  })
}

module.exports = { sendContactEmail };