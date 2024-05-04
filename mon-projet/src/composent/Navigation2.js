import React from "react";
import { NavLink } from "react-router-dom";

const HomeLink = () => {
  return (
    <NavLink to="/" className="link">
      <li className="nav-item">Accueil</li>
    </NavLink>
  );
};

const Navigation2 = () => {
  return (
    <div className="link">
      <ul>
        <HomeLink />
      </ul>
    </div>
  );
};

export default Navigation2;
