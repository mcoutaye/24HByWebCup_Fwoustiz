import React from 'react';

const MonCompte = ({ email }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h2>Mon Compte</h2>
        <p>Bienvenue, {email}!</p>
      </div>
    </div>
  );
};

export default MonCompte;
