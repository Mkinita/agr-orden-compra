import AWS from 'aws-sdk';

const ses = new AWS.SES({
    region: 'sa-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
  

async function enviarCorreoDeNotificacion(destinatario, asunto, mensaje) {
  const params = {
    Destination: {
      ToAddresses: [destinatario],
    },
    Message: {
      Body: {
        Text: {
          Data: mensaje,
        },
      },
      Subject: {
        Data: asunto,
      },
    },
    Source: 'jerez4959@gmail.com', // Reemplaza con tu dirección de correo electrónico
  };

  try {
    await ses.sendEmail(params).promise();
    console.log('Correo de notificación enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo de notificación:', error);
  }
}

export default enviarCorreoDeNotificacion;
