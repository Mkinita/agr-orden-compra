import { useState } from 'react';
import enviarCorreoDeNotificacion from './EnviarCorreo';

function EmailForm() {
  const [destinatario, setDestinatario] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Llamar a la función enviarCorreoDeNotificacion con los valores del formulario
    await enviarCorreoDeNotificacion(destinatario, asunto, mensaje);

    // Limpiar los campos del formulario
    setDestinatario('');
    setAsunto('');
    setMensaje('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Destinatario"
        value={destinatario}
        onChange={(e) => setDestinatario(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Asunto"
        value={asunto}
        onChange={(e) => setAsunto(e.target.value)}
        required
      />
      <textarea
        placeholder="Mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
      />
      <button type="submit">Enviar correo</button>
    </form>
  );
}

export default EmailForm;
