import React from "react";
import GDSCImg from "../images/GDSC/GDSCImg.png";
import GDSCevent from "../images/GDSC/GDSCevent.png";
import GDSCpage from "../images/GDSC/GDSCpage.png";
import GDSCWebsite from "../images/GDSC/GDSCWebsite.png";

import "../css/Designs.css";

export default function GDSC() {
  return (
    <div className="project-page container">

      {/* Project Title */}
      <h1>GDSC UTD - Club Website</h1>

      {/* Project Description */}
      <p className="project-description">
        Designed the official website for the Google Developer Student Club at UTD in Figma. 
        The design focuses on centralizing information about workshops, events, and club resources, making it easy for students to stay engaged.
      </p>

      {/* Main Image */}
      <img
        src={GDSCImg}
        alt="GDSC Website Screenshot"
        style={{ width: "100%", borderRadius: 12, margin: "20px 0" }}
      />

      {/* Project Details */}
      <section className="project-section">
        <h2>Background</h2>
        <p>
          GDSC UTD hosts weekly workshops and events for students interested in development, design, and technology. 
          The website was created to centralize event information, provide easy navigation, and encourage student participation.
        </p>
      </section>

      <section className="project-section">
        <h2>User Needs & Research</h2>
        <div className="info-card">
          <p>
            Through discussions with club leaders and students, we identified key needs:
            <br />• Students needed a clear, organized way to view upcoming workshops.
            <br />• Past events and resources should be easily accessible for review.
            <br />• Information about club activities and team members needed to be visible to increase engagement.
            <br />• The design had to be visually engaging but simple, so students could quickly find information.
          </p>
        </div>
      </section>


{/* Design Process */}
<section className="design-process">
  <h2>Design Process</h2>
  <p>
    The design process began with understanding the goals of GDSC UTD 
    to create a space where students could explore upcoming events, 
    learn about the team, and understand the benefits of joining the club. 
    After gathering feedback from team members, I moved to high-fidelity 
    prototypes in Figma. The design emphasizes simplicity, accessibility, 
    and alignment with the club’s mission of encouraging innovation and 
    collaboration.
  </p>
</section>

<hr className="section-divider" />
<section className="project-section">
  <h2>Landing Page Design</h2>
  <p>
    The landing page was designed to immediately capture GDSC UTD’s identity which is
    energetic, inclusive, and innovation-driven. It features a clean hero section 
    with bold typography, the GDSC color palette, and clear calls to action that 
    guide users to upcoming events and club information. Visual hierarchy and 
    white space were carefully balanced to make the content easy to scan while 
    maintaining a modern, welcoming feel that reflects the club’s spirit of 
    collaboration and creativity.
  </p>
</section>
      <img
        src={GDSCpage}
        alt="GDSC Website Screenshot"
        style={{ width: "100%", borderRadius: 12, margin: "20px 0" }}
      />

      <section className="design-process">
  <h2>2nd Iteration</h2>
  <p>
    Here is another iteration of the landing page after some commentary from the technical team. 
  </p>
  <img
        src={GDSCWebsite}
        alt="GDSC Website Screenshot"
        style={{ width: "100%", borderRadius: 12, margin: "20px 0" }}
      />
</section>

    </div>

    
  );
}
