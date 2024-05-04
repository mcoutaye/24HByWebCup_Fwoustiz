import React from "react";
import { NavLink} from "react-router-dom";

const handleAboutClick = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
    window.scrollTo({
      top: window.pageYOffset + aboutSectionPosition + 30,
      behavior: "smooth"
    });
  }
};

const HeaderBanner = () => {
  return (
    <NavLink to="/" className="header-banner">
      <li className="nav-item" style={{ fontFamily: 'Lato, sans-serif'}}></li>
    </NavLink>
  );
};

const HomeLink = () => {
  return (
    <NavLink to="/" className="nav-link-home">
      <li className="nav-item" style={{ fontFamily: 'Lato, sans-serif'}}>Accueil</li>
    </NavLink>
  );
};

const AboutLink = () => {
  return (
      <li className="nav-link-about" style={{ fontFamily: 'Lato, sans-serif'}} onClick={handleAboutClick}>À propos</li>
  );
};

const RejoindreLink = () => {
    return (
      <NavLink to="/login" className="nav-link-rejoindre">
        <li className="nav-item" style={{ fontFamily: 'Lato, sans-serif'}}>Nous rejoindre</li>
      </NavLink>
    );
  };

const ActusLink = () => {
    return (
      <NavLink to="/about" className="nav-link-actus">
        <li className="nav-item" style={{ fontFamily: 'Lato, sans-serif'}}>Publier</li>
      </NavLink>
    );
  };

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <HeaderBanner />
        <HomeLink />
        <AboutLink />
        <RejoindreLink />
        <ActusLink />
      </ul>
    </div>
  );
};

export default Navigation;