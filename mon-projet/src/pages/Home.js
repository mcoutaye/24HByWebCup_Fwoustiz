import React from "react";
import Navigation from "../composent/Navigation";
import Accueil from "../composent/Accueil";
import EcoIndexBadge from './EcoIndexBadge'; // Importer le composant EcoIndexBadge
import "../Style/Style.css";
import logo from '../assets/logo_webcup.webp';
import baniere from '../assets/header_background.jpg';
import iconf from '../assets/icon-facebook.png';
import iconi from '../assets/icon-insta.webp';
import iconw from '../assets/icon-Webcup.png';
import fond from '../assets/test.gif';
import equipe from '../assets/equipe.png';

const Home = () => {
  return (
    <div className="image-container">
      <Accueil />
      <Navigation />
      <EcoIndexBadge />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={baniere} className="banner" alt="banner" />
      <img src={fond} className="fond-gif" alt="fond" />
      <img src={equipe} className="equipe" alt="equipe" />
      <h1 id="about" className="text">A propos</h1>
      <p className="text2">La Webcup, c'est comme une effervescence numérique qui s'empare d'un lieu pendant quelques jours. Imaginez un rassemblement bouillonnant où les esprits créatifs se rencontrent pour un marathon d'idées et de codage. C'est une célébration de l'innovation, où des équipes se forment, chacune avec son lot d'expertises diverses, prêtes à relever le défi de créer quelque chose de nouveau, de novateur, et surtout, de fonctionnel, en un temps record.<br></br><br></br>Dans l'atmosphère électrique d'une Webcup, on ressent cette énergie palpitante qui émane des équipes plongées dans la conception et le développement. Les claviers cliquettent, les écrans scintillent, et les discussions fusent alors que les participants jonglent avec les langages de programmation, les frameworks et les API pour donner vie à leurs idées.
        Mais la Webcup, ce n'est pas seulement une compétition technique. C'est aussi un terrain fertile pour l'apprentissage, le partage et la collaboration. Les participants échangent des connaissances, se défient mutuellement et s'entraident pour surmonter les obstacles qui se dressent sur leur chemin vers l'innovation.
        <br></br><br></br>Enfin, vient le moment où les juges délibèrent et désignent les vainqueurs. Mais au-delà des prix et des récompenses, ce qui compte le plus, c'est cette expérience collective, cette communion d'idées et cette passion partagée pour la technologie qui font de chaque Webcup un événement inoubliable.
      </p>
      <img src={baniere} className="banner_fin" alt="banner" />
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
    </div>
  );
};

export default Home;
