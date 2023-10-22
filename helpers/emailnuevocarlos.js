
const nodemailer = require('nodemailer');

// Configura el transporte de correo
const transporter = nodemailer.createTransport({
  
    service: 'Gmail',
    auth: {
    user: 'jerez4959@gmail.com',
    pass: 'ttwxenwctoujzlcb',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Función para enviar correo electrónico
async function sendEmail({ to, subject, text }) {
  const mailOptions = {
    from: 'jerez4959@gmail.com',
    to:'carlos.vera.aparicio@gmail.com',
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado:', info.response);
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
}

module.exports = sendEmail;