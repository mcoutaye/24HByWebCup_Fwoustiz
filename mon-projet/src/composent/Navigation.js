import React from "react";
import { NavLink} from "react-router-dom";

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

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <HomeLink />
        <AboutLink />
        <RejoindreLink />
        <ActusLink />
      </ul>
    </div>
  );
};

export default Navigation;
