import React from "react";
import GDSCImg from "../images/GDSCImg.png";
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

      <section className="project-section">
        <h2>Main Goals</h2>
        <div className="info-card">
          <p>
            - Provide clear, accessible information about upcoming workshops.<br />
            - Maintain an archive of past events for students to review.<br />
            - Promote club engagement and simplify access to resources and event registration.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h2>Design Decisions</h2>
        <div className="info-card">
          <p>
            We prioritized readability and simplicity, creating a modern layout with soft color accents to highlight key information. 
            Navigation was structured around primary user goals: discovering events, accessing resources, and learning about the club. 
            Components were designed modularly so the website could scale with future workshops and events.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Website Components */}
      <section className="design-process">
        <h2>Website Components</h2>
        <div className="process-steps">
          <div className="step-card">
            <h4>Homepage</h4>
            <p>Highlights upcoming workshops, announcements, and quick navigation to key sections.</p>
          </div>
          <div className="step-card">
            <h4>Events Page</h4>
            <p>Lists upcoming and past events with dates, descriptions, and links to resources or registration.</p>
          </div>
          <div className="step-card">
            <h4>About Page</h4>
            <p>Provides information about the club’s mission, team, and contact details.</p>
          </div>
          <div className="step-card">
            <h4>Resources</h4>
            <p>Centralized location for slides, workshop materials, and external learning links.</p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Development Process */}
      <section className="iteration">
        <h2>Design Process</h2>
        <p>
          Designed entirely in Figma, focusing on a user-centered approach. 
          Started with understanding student needs and researching existing club websites. 
          Created wireframes, low-fidelity prototypes, and then high-fidelity designs, iterating based on feedback from club leaders and peers.
        </p>
      </section>

      <section className="iteration">
        <h2>Challenges</h2>
        <p>
          Prioritizing the most important information without overwhelming the user, 
          and creating a layout that could accommodate both upcoming and past events. 
          Ensuring consistency and scalability in the design was a key focus.
        </p>
      </section>

      <section className="iteration">
        <h2>Accomplishments</h2>
        <p>
          Successfully designed a clean, user-friendly website for GDSC UTD. 
          The design helps students quickly access information and encourages participation in club events.
        </p>
      </section>

      <section className="iteration">
        <h2>What I Learned</h2>
        <p>
          Learned how to design modular, student-focused websites, structure event-based content clearly, and use Figma to translate user research into actionable design components.
        </p>
      </section>

    </div>
  );
}
