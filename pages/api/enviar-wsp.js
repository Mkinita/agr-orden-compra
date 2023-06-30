import { Client, LocalAuth } from 'whatsapp-web.js';

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.initialize();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { numero, mensaje } = req.body;
    const message = {
      from: '+56961084501',
      to: `${numero}@c.us`,
      body: mensaje,
    };

    try {
      await client.sendMessage(message);
      res.status(200).json({ success: true, message: 'Mensaje enviado correctamente' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al enviar el mensaje', error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Método no permitido' });
  }
}
