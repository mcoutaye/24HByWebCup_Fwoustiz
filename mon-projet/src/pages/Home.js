import React from "react";
import Navigation from "../composent/Navigation";
import "../Style/Style.css";
import logo from '../assets/logo_webcup.webp';
import baniere from '../assets/24Hbackground.webp';
import logo_bis from '../assets/tes.png';

const Home = () => {
  return (
    <div className="image-container">
      <Navigation />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={baniere} className="baniere" alt="baniere" />
      <img src={logo_bis} className="logo_bis" alt="logo_bis" />
    </div>
  );
};

export default Home;
