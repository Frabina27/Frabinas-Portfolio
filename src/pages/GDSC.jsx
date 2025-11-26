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
        I designed the official website for the Google Developer Student Club at UTD in Figma. 
        The site focuses on centralizing information about workshops, events, and club resources so students can easily stay engaged.
      </p>

      {/* Main Image */}
      <img
        src={GDSCImg}
        alt="GDSC UTD homepage with hero section and navigation"
        style={{ width: "100%", borderRadius: 12, margin: "20px 0" }}
      />

      {/* Background */}
      <section className="project-section">
        <h2>Background</h2>
        <p>
          GDSC UTD hosts weekly workshops and events for students interested in development, design, and technology. 
          The website was created to bring all the information together, make navigation easy, and encourage student participation.
        </p>
      </section>

      {/* User Needs & Research */}
      <section className="project-section">
        <h2>User Needs & Research</h2>
        <p>
          From talking with club leaders and students, I learned that students wanted a clear way to see upcoming workshops and past events. 
          They also wanted easy access to resources and information about club activities and team members. 
          The design needed to be simple and visually engaging so that students could quickly find what they needed without confusion.
        </p>
      </section>

      {/* Design Process */}
      <section className="project-section">
        <h2>Design Process</h2>
        <p>
          I started by understanding GDSC UTD’s goals: creating a place for students to explore events, learn about the team, and see the benefits of joining. 
          After gathering feedback, I created high-fidelity prototypes in Figma. I tested different color options, including black and dark blue for a professional look and a rainbow-inspired version to include all the club colors. 
          The final design balanced visual interest with clarity and readability.
        </p>
      </section>

      <hr className="section-divider" />

      {/* Landing Page Design */}
      <section className="project-section">
        <h2>Landing Page Design</h2>
        <p>
          The landing page shows GDSC UTD’s identity as energetic, inclusive, and focused on innovation. 
          It has a clear hero section, bold typography, calls to action, and the club’s color palette applied thoughtfully. 
          The layout and white space help students scan the content easily while keeping the page welcoming and modern.
        </p>
        <img
          src={GDSCpage}
          alt="Landing page showing hero section, event highlights, and navigation"
          style={{ width: "100%", borderRadius: 12, margin: "20px 0" }}
        />
      </section>

      {/* Second Iteration */}
      <section className="project-section">
        <h2>Second Iteration</h2>
        <p>
          After feedback from the technical team, I refined the landing page to improve readability and make the important information stand out. 
          This iteration tested layout and visual adjustments while keeping the experience simple and easy to use.
        </p>
        <img
          src={GDSCWebsite}
          alt="Updated landing page showing improved layout and visual hierarchy"
          style={{ width: "100%", borderRadius: 12, margin: "20px 0" }}
        />
      </section>

      {/* Conclusion / Reflection */}
      <section className="project-section">
        <h2>Conclusion</h2>
        <p>
        For the GDSC UTD website, I designed and created high-fidelity prototypes in Figma, starting with layout and color exploration. 
        I tested different color schemes, including dark blue and rainbow-inspired options, and refined the design based on feedback from students and team members. 
        I organized the content to highlight upcoming workshops, past events, resources, and team information, and designed the landing page and other key pages to be visually engaging and easy to navigate. 
        The final website reflects the energy and inclusivity of the club while centralizing all essential information in a clear and accessible way.
      </p>
      </section>

    </div>
  );
}
