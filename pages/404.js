import React from 'react';

const c404 = () => {
  const containerStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    textAlign: 'center',
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
