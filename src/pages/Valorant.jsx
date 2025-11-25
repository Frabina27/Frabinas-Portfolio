import React from "react";
import Val1 from "../images/Val/Val1.png";
import Val2 from "../images/Val/Val2.png";
import Val3 from "../images/Val/Val3.png";
import Val5 from "../images/Val/Val5.png";

import "../css/Designs.css";

export default function GDSC() {
  return (
    <div className="project-page container">

      {/* Project Title */}
      <h1>Valorant - Personal Cards</h1>

      {/* Project Description */}
      <p className="project-description">
    This was a fun personal project I did to practice my UI/UX skills by designing player cards for characters in the popular video game Valorant. 
          The goal was to create visually appealing and informative cards that capture the essence of each character while providing key information at a glance.      </p>

      {/* Main Image */}
      <img
        src={Val1}
        alt="Valorant Killjoy Card"
        style={{ width: "70%", borderRadius: 12, margin: "20px 0" }}
      />

      <img
        src={Val2}
        alt="Valorant Chamber Card"
        style={{ width: "70%", borderRadius: 12, margin: "20px 0" }}
      />

  <img
        src={Val3}
        alt="Valorant Neon Card"
        style={{ width: "70%", borderRadius: 12, margin: "20px 0" }}
      />

       <img
        src={Val5}
        alt="Valorant Cypher Card"
        style={{ width: "70%", borderRadius: 12, margin: "20px 0" }}
      />

    </div>

    
    
  );
}
