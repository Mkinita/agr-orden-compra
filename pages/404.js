import React from 'react';

const C404 = () => {
  const containerStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#fff',
  };

  const emojiStyle = {
    fontSize: '15rem',
    lineHeight: 1,
  };

  return (
    <div className="flex items-center justify-center h-screen py-0 bg-gray-100">
      <div style={containerStyle}>
        <h2 className="text-3xl font-bold mb-4">
          BOLETA PENDIENTE DE PAGO
        </h2>

        <div style={emojiStyle}>
          <h1 role="img" aria-label="emoji">
            ⚠️
          </h1>
        </div>
    
<br />
    <br />
        <p className="text-gray-600 mt-4">
          Boleta emitida el día Lunes 04-05-2026
<br />
Hasta la fecha no se ha registrado el pago correspondiente.
<br />
Para evitar pérdida de información, suspensión de servicios
o eliminación de datos, regularice el pago a la brevedad.
<br />
Si el pago ya fue realizado, favor omitir este mensaje.

        </p>
      </div>
    </div>
  );
};

export default C404;

