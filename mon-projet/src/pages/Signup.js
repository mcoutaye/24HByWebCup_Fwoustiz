import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signUp } from '../firebase';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await signUp(email.value, password.value);
      navigate('/moncompte');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <p>Vous avez déjà un compte ? <Link to="/login">Connectez-vous ici</Link></p>
    </div>
  );
};

export default Signup;
