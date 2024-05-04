import React from "react";
import Navigation2 from "./Navigation2";
import img from '../assets/img.png';

const Transition = () => {
  return (
    <div className="rectangle">
      <div className="police">
        <h1> Découvrez leur profil et témoignage</h1>
        <ol className="bg">
            <li> >>Publier</li>
            <Navigation2 /> 
        </ol>
      </div>
      <img src={img} className="img" alt="img" />
    </div>
  );
};

export default Transition;
