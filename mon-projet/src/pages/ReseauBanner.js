import React from 'react';
import iconf from '../assets/icon-facebook.png';
import iconi from '../assets/icon-insta.webp';
import iconw from '../assets/icon-Webcup.png';

const ContactFooter = () => {
  return (
    <div className="end-section">
      <h2>Contactez-nous</h2>
      <p>Pour toute demande d'information, n'hésitez pas à nous contacter :</p>
      <ul className="social-links">
        <li><a href="mailto:contact@webcup.com">contact@webcup.com</a></li>
        <li><a href="tel:+0262 71 33 51">+0262 71 33 51</a></li>
      </ul>
      <div className="social-icons">
        <h2>Nous suivre</h2>
        <a href="https://www.facebook.com/webcup.officiel?locale=fr_FR">
          <img src={iconf} className="taille-icon" alt="Facebook" />
          <span className="social-link-text">Facebook</span>
        </a>
        <br></br>
        <br></br>
        <a href="https://www.instagram.com/web_cup/">
          <img src={iconi} className="taille-icon" alt="Instagram" />
          <span className="social-link-text2">Instagram</span>
        </a>
        <br></br>
        <br></br>
        <a href="https://www.webcup.fr/">
          <img src={iconw}  className="taille-icon" alt="Webcup" />
          <span className="social-link-text3">Webcup.fr</span>
        </a>
      </div>
      <h1 className="text-de-fin" >Webcup 2024<br></br>L'esprit de compétition, s'amuser et coder pendant 24h</h1>
    </div>
  );
};

export default ContactFooter;