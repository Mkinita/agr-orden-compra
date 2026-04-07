const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const recipients = ['comprasagrifor@gmail.com', 'ugavino@gmail.com'];

async function sendEmail({ subject, text }) {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: recipients,
      subject,
      text,
    });

    console.log('Correo enviado:', response);
    return response;
  } catch (error) {
    console.error('Error al enviar correo:', error);
    throw error;
  }
}

module.exports = sendEmail;
