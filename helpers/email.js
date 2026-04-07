const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// Función para enviar correo electrónico
async function sendEmail({ to, subject, text }) {
  const mailOptions = {
    from: 'onboarding@resend.dev',
    to: 'jerez4959@gmail.com', // te lo envías a ti mismo (como tenías)
    subject,
    text,
  };

  try {
    const info = await resend.emails.send(mailOptions);
    console.log('Correo enviado:', info);
    return info;
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw error;
  }
}

module.exports = sendEmail;
