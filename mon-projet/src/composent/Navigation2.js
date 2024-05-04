import React from "react";
import { NavLink} from "react-router-dom";

const HomeLink = () => {
  return (
    <NavLink to="/" className="nav-link-home">
      <li className="nav-item">Accueil</li>
    </NavLink>
  );
};


const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <HomeLink />
      </ul>
    </div>
  );
};

export default Navigation;
