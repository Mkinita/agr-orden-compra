import React from 'react';

const AlertaPago = () => {
  const containerStyle = {
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    padding: '2.5rem',
    textAlign: 'center',
    maxWidth: '700px',
    width: '100%',
    backgroundColor: '#fff',
  };

  const emojiStyle = {
    fontSize: '8rem',
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div style={containerStyle}>
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          ⚠️ BOLETA PENDIENTE DE PAGO
        </h1>

        <div style={emojiStyle}>
          💸
        </div>

        <p className="text-lg mt-4 text-gray-700">
          Se registró una boleta de honorarios emitida el día:
        </p>

        <p className="text-2xl font-bold mt-2 text-black">
          Lunes 04-05-2026
        </p>

        <p className="mt-6 text-gray-600 leading-7">
          Hasta la fecha no se ha registrado el pago correspondiente.
          <br />
          Para evitar pérdida de información, suspensión de servicios
          o eliminación de datos, regularice el pago a la brevedad.
        </p>

        <p className="text-sm text-gray-400 mt-8">
          Si el pago ya fue realizado, favor omitir este mensaje.
        </p>
      </div>
    </div>
  );
};

export default AlertaPago;
