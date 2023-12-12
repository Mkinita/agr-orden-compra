
const nodemailer = require('nodemailer');

// Configura el transporte de correo
const transporter = nodemailer.createTransport({
  
    service: 'Gmail',
    auth: {
    // user: 'comprasagrifor@gmail.com',
    // pass: 'dazk udzz zslp twyb',
    user: 'jerez4959@gmail.com',
    pass: 'ttwxenwctoujzlcb',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const recipients = ['comprasagrifor@gmail.com'];

// Función para enviar correo electrónico
async function sendEmail({ to, subject, text }) {
  const mailOptions = {
    from: 'jerez4959@gmail.com',
    to: recipients,
    subject:'Sistema De Compra !Recordatorio¡',
    text: 'Revisa el estado de las solicitudes y ordenes de compras pendientes en el siguiente enlace.',
    html: `
      <p>Revisa el estado de las solicitudes y ordenes de compras pendientes en el siguiente enlace. </p>
      <a href="https://agr-orden-compra-production.up.railway.app/admin-pendientes">Sistema/Compras/Agrifor/Pendientes</a>.
      <p></p>
      <img src="https://agr-orden-compra-production.up.railway.app/_next/image?url=%2Fassets%2Fimg%2FAGRF.png&w=384&q=75" alt="Logo">
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado:', info.response);
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
}



module.exports = sendEmail;
