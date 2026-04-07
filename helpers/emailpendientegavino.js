
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const recipients = ['ugavino@gmail.com'];

// Función para enviar correo electrónico
async function sendEmail({ to, subject, text }) {
  try {
    const response = await resend.emails.send({
      from: 'Sistema Agrifor <notificaciones@agrifor.cl>', // 👈 usa tu dominio
      to: recipients,
      subject: subject || 'Sistema De Compra ¡Recordatorio!',
      text:
        text ||
        'Revisa el estado de tus solicitudes y órdenes de compra en el siguiente enlace.',
      html: `
        <p>Revisa el estado de tus solicitudes y órdenes de compra pendientes en el siguiente enlace:</p>
        <a href="https://agr-orden-compra-production.up.railway.app/gavino-pendientes">
          Sistema/Compras/Agrifor/Gavino/Pendientes
        </a>
        <p></p>
        <img src="https://agr-orden-compra-production.up.railway.app/_next/image?url=%2Fassets%2Fimg%2FAGRF.png&w=384&q=75" alt="Logo">
      `,
    });

    console.log('Correo enviado:', response);
    return response;
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw error;
  }
}

module.exports = sendEmail;
