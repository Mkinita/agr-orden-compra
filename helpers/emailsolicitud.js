
const nodemailer = require('nodemailer');

// Configura el transporte de correo
const transporter = nodemailer.createTransport({
  
    service: 'Gmail',
    auth: {
    user: 'comprasagrifor@gmail.com',
    pass: 'dazk udzz zslp twyb',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Función para enviar correo electrónico
async function sendEmail({ to, subject, text }) {
  const mailOptions = {
    from: 'comprasagrifor@gmail.com',
    to:'comprasagrifor@gmail.com',
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