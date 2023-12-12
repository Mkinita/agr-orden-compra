import sendMailMasivaCarlos from '../../helpers/emailpendienteroxana';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { to, subject, text } = req.body;

  try {
    await sendMailMasivaCarlos({ to, subject, text });
    return res.status(200).json({ message: 'Correo electrónico enviado' });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    return res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
  
}
