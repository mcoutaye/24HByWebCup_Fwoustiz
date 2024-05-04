import React from 'react';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Me connecter</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
