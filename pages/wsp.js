import { useState } from 'react';

export default function WSPPage() {
  const [numero, setNumero] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [respuesta, setRespuesta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/enviar-wsp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ numero, mensaje })
    });

    const data = await response.json();
    setRespuesta(data.message);
    setEnviado(true);
  };

  return (
    <div>
      <h1>Enviar mensaje de WhatsApp</h1>
      {enviado && <p>{respuesta}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Número:
          <input type="text" value={numero} onChange={e => setNumero(e.target.value)} />
        </label>
        <br />
        <label>
          Mensaje:
          <input type="text" value={mensaje} onChange={e => setMensaje(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
}
