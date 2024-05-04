import React from "react";
import { NavLink} from "react-router-dom";

const Accueil = () => {
  return (
    <div className="carousel">
      <h1 style={{ fontFamily: 'Lato, sans-serif'}} className="titre_accueil">Les vétérants du 24h By Webcup</h1>
      <h2 style={{ fontFamily: 'Lato, sans-serif'}} className="texte_accueil">Durant 24h chrono, les participants vont se challenger autour d'un concours qui consiste à réaliser un site web complet <br></br> à partir d'un sujet qui ne leur sera communiqué qu'au top départ du concours.</h2>
    </div>
  );
};

const HomeLink = () => {
  return (
    <NavLink to="/" className="nav-link-home">
      <li className="nav-item">Accueil</li>
    </NavLink>
  );
};

const AboutLink = () => {
  return (
    <NavLink to="/about" className="nav-link-about">
      <li className="nav-item">À propos</li>
    </NavLink>
  );
};

const RejoindreLink = () => {
    return (
      <NavLink to="/about" className="nav-link-rejoindre">
        <li className="nav-item">Nous rejoindre</li>
      </NavLink>
    );
  };

const ActusLink = () => {
    return (
      <NavLink to="/about" className="nav-link-actus">
        <li className="nav-item">Actus</li>
      </NavLink>
    );
  };

const Loginlink = () => {
    return (
      <NavLink to="/login" className="nav-link-login">
        <li className="nav-item">Me connecter</li>
      </NavLink>
    );
  };

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <HomeLink />
        <AboutLink />
        <RejoindreLink />
        <ActusLink />
        <Loginlink />
      </ul>
      <Accueil />
    </div>
  );
};

export default Navigation;
