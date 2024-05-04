import React from 'react';
import SignupForm from '../composent/SignupForm';

function Signup() {
  const handleSignup = (email, password) => {
    console.log('Inscription avec email:', email, 'et mot de passe:', password);
  };

  return (
    <div>
      <h2>Inscription</h2>
      <SignupForm onSignup={handleSignup} />
    </div>
  );
}

export default Signup;
