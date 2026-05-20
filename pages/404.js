import React from 'react';

const c404 = () => {
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
    fontSize: '15rem',
  };

  return (
    <div className="flex items-center justify-center h-screen py-0">
      <div style={containerStyle}>
        <h2>UPS OCURRIÓ UN ERROR</h2>
        <div style={emojiStyle}>
          <h1 role="img" aria-label="emoji">🤕</h1>
        </div>
        <p>COMUNÍCATE CON SOPORTE TÉCNICO</p>
      </div>
    </div>
  );
};

export default c404;
