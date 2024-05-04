import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import auth from './firebase';
import Home from './pages/Home';
import About from './pages/Actus';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MonCompte from './pages/MonCompte';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={user ? <Navigate to="/moncompte" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/moncompte" /> : <Signup />} />
        <Route path="/moncompte" element={user ? <MonCompte email={user.email} /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;