
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

const recipients = ['comprasagrifor@gmail.com', 'ugavino@gmail.com'];

// Función para enviar correo electrónico
async function sendEmail({ to, subject, text }) {
  const mailOptions = {
    from: 'comprasagrifor@gmail.com',
    to: recipients,
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