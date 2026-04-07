const nodemailer = require('nodemailer');

// Configuración MÁS estable
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // 👈 obligatorio para 465
  auth: {
    user: 'jerez4959@gmail.com',
    pass: 'ttwxenwctoujzlcb',
  },
});

const recipients = ['comprasagrifor@gmail.com', 'ugavino@gmail.com'];

// Función para enviar correo electrónico
async function sendEmail({ subject, text }) {
  const mailOptions = {
    from: 'jerez4959@gmail.com',
    to: recipients,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.response);
    return info;
  } catch (error) {
    console.error('Error al enviar correo:', error);
    throw error; // 👈 CLAVE para que tu API detecte el error
  }
}

module.exports = sendEmail;
