import React from "react";
import "../css/Designs.css";

import Page1 from "../images/ACM_Page1.png";
import Page2 from "../images/ACM_Page2.png";
import Page3 from "../images/ACM_Page3.png";

export default function ACMArchives() {
  return (
    <div className="project-page container">
      {/* Project Title */}
      <h1>ACM Archives - Magazine Design</h1>

      {/* Project Description */}
      <p className="project-description">
        Designed pages for the ACM student magazine using Canva. 
        Focused on visually appealing layouts that communicate content clearly while maintaining a professional aesthetic.
      </p>

      {/* Featured Pages */}
      <section className="project-section">
        <h2>Magazine Pages</h2>

        <div className="iteration-images">
  <div className="info-card">
    <img src={Page1} alt="ACM Page 1" className="acm-image" />
    <p><strong>Page 1:</strong> Introduction and cover page...</p>
  </div>

  <div className="info-card">
    <img src={Page2} alt="ACM Page 2" className="acm-image" />
    <p><strong>Page 2:</strong> Event highlights...</p>
  </div>

  <div className="info-card">
    <img src={Page3} alt="ACM Page 3" className="acm-image" />
    <p><strong>Page 3:</strong> Club projects showcase...</p>
  </div>
</div>
      </section>

      <hr className="section-divider" />

    
      <section className="iteration">
        <h2>What I Learned</h2>
        <p>
          Learned how to translate content into engaging magazine layouts using Canva, convey hierarchy visually, and ensure each page connects to the content effectively.
        </p>
      </section>
    </div>
  );
}
