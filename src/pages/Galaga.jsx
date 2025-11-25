import React from "react";
import GalagaImg from "../images/Galaga/GalagaCover.png";
import explosionAnimation from "../images/Galaga/explosionAnimation.png";
import GameOver from "../images/Galaga/GameOver.png";
import ship1 from "../images/Galaga/ship1.png";
import ship2 from "../images/Galaga/ship2.png";
import START from "../images/Galaga/START.png";

import "../css/Designs.css";

export default function GDSC() {
  return (
    <div className="project-page container">

      {/* Project Title */}
      <h1>GDSC UTD - Club Website</h1>

      {/* Project Description */}
      <p className="project-description">
        Designed and contributed to programming a retro styled Galactica game called Galaga for a class assignment using Java in Processing. Code can be shared privately if requested.
      </p>

      {/* Main Image */}
      <img
        src={GalagaImg}
        alt="Galaga Image"
        style={{ width: "100%", borderRadius: 12, margin: "20px 0" }}
      />

      <section className="project-section">
        <h2> My Contribution:</h2>
        <div className="info-card">
          <p>
            <br />• I create all the sprites and pick audio for certain interactions and events such as enemy ship appearing, point collection, asteroids shot, and satellites exploded.
            <br />
            <br />• I programmed this depending on the interaction that the main ship would have. 
            <br />
            <br />• I programmed the control and its movement as well as shooting capabilities.
          </p>
        </div>
      </section>

    {/* Feature 1 */}
      <section className="iteration">
        <h2> Sprites:</h2>
        <p>
          Included here are images of some of the sprites that were created for this project. 
           </p>
        <div className="iteration-images">
          <img src={explosionAnimation} alt="Main Page" style={{ width: "100%", margin: "12px 0" }} />
          <img src={ship1} alt="Main Page" style={{ width: "50%", margin: "12px 0" }} />
          <img src={ship2} alt="Main Page" style={{ width: "50%", margin: "12px 0" }} />
          <img src={START} alt="Main Page" style={{ width: "50%", margin: "12px 0" }} />
          <img src={GameOver} alt="Main Page" style={{ width: "50%", margin: "12px 0" }} />
        </div>
      </section>



    </div>

    
  );
}