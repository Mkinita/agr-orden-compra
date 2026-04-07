const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const recipients = ['comprasagrifor@gmail.com'];

// Función para enviar correo electrónico
async function sendEmail({ to, subject, text }) {
  try {
    const response = await resend.emails.send({
      from: 'Sistema Agrifor <notificaciones@agrifor.cl>', // 👈 usa tu dominio verificado
      to: recipients,
      subject: subject || 'Notificación',
      text: text || 'Tienes una nueva notificación en el sistema.',
    });

    console.log('Correo enviado:', response);
    return response;
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw error;
  }
}

module.exports = sendEmail;
