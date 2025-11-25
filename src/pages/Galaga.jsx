import React from "react";
import EunoiaImg from "../images/Eunoia/EunoiaImg.png";
import "../css/Designs.css";

export default function Eunoia() {
  return (
    <div className="project-page container">

      {/* Project Title */}
      <h1>Eunoia - Wellness Platform</h1>

      {/* Project Description */}
      <p className="project-description">
        Eunoia reimagines workplace wellness through play, aligning with the design prompt to create spaces that power people. 
        Inspired by CBRE’s human-centered approach, we designed a gamified digital environment where mood check-ins and team growth feel like leveling up in a pixel adventure game. 
        Our goal was to make workplace wellness interactive, accessible, and genuinely enjoyable.
      </p>

      {/* Main Image */}
      <img
        src={EunoiaImg}
        alt="Eunoia Main"
        style={{ width: "100%", borderRadius: 12, margin: "20px 0" }}
      />

      {/* Project Details */}
      <section className="project-section">
        <h2>Background</h2>
        <p>
          Eunoia was designed during a 24-hour design-a-thon to combat worker burnout by prioritizing breaks and wellness. 
          The project aimed to transform team wellness into an engaging experience that encourages self-reflection, collaboration, and consistent progress.
        </p>
      </section>

      <section className="project-section">
        <h2>Primary Research</h2>
        <div className="info-card">
          <p>
            We researched workplace wellness trends and human-centered design practices, focusing on ways to make wellness fun and engaging. 
            Key insights included the importance of mood tracking, visual feedback, and gamified incentives to encourage regular participation.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h2>Competitive Analysis</h2>
        <div className="info-card">
          <p>
            We analyzed existing wellness apps and gamified productivity tools, noting that most lacked emotional engagement or team collaboration features. 
            Eunoia’s design addresses these gaps with interactive dashboards, avatars, and team-level progression.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Design Process Steps */}
      <section className="design-process">
        <h2>The Design Process</h2>
        <div className="process-steps">
          <div className="step-card">
            <h4>Empathize</h4>
            <p>Conducted research to understand employee wellness challenges and motivational triggers.</p>
          </div>
          <div className="step-card">
            <h4>Define</h4>
            <p>Identified user goals: mood tracking, completing wellness challenges, and team engagement.</p>
          </div>
          <div className="step-card">
            <h4>Ideate</h4>
            <p>Brainstormed gamified solutions and visual storytelling ideas to make wellness fun.</p>
          </div>
          <div className="step-card">
            <h4>Prototype</h4>
            <p>Created interactive Figma prototypes emphasizing 8-bit pixel aesthetics and smooth user flows.</p>
          </div>
          <div className="step-card">
            <h4>Test</h4>
            <p>Gathered feedback to refine usability, visual clarity, and balance between retro style and modern design.</p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Iteration 1 */}
      <section className="iteration">
        <h2>Iteration 1</h2>
        <p>
          Initial designs focused on exploring gamified wellness components and pixel-art interface ideas. 
          We refined color schemes and prioritized features like mood check-ins and progress tracking.
        </p>
        <div className="iteration-images">
          <img src="../images/iteration1_1.png" alt="Iteration 1 Image 1" style={{ width: "100%", margin: "12px 0" }} />
          <img src="../images/iteration1_2.png" alt="Iteration 1 Image 2" style={{ width: "100%", margin: "12px 0" }} />
        </div>
      </section>

      {/* Iteration 2 */}
      <section className="iteration">
        <h2>Iteration 2</h2>
        <p>
          Refined interface for accessibility and clarity while keeping the retro 8-bit charm. 
          Added avatars, team progress tracking, and smoother interactions. Addressed prototyping challenges and finalized visual storytelling.
        </p>
        <div className="iteration-images">
          <img src="../images/iteration2_1.png" alt="Iteration 2 Image 1" style={{ width: "100%", margin: "12px 0" }} />
          <img src="../images/iteration2_2.png" alt="Iteration 2 Image 2" style={{ width: "100%", margin: "12px 0" }} />
        </div>
      </section>

      {/* Inspiration & Accomplishments */}
      <section className="project-section">
        <h2>Inspiration & Accomplishments</h2>
        <p>
          Inspired by CBRE’s human-centered design approach, we built a gamified wellness platform that makes work fun. 
          We are proud of designing Eunoia from the ground up, creating a full 8-bit inspired interface through collaboration, creativity, and persistence.
        </p>
      </section>

      <section className="project-section">
        <h2>What We Learned</h2>
        <p>
          Learned to build dynamic prototypes in Figma, create variant-based interactions, and tell a story visually. 
          The experience enhanced our understanding of gamification, accessibility, and interactive design.
        </p>
      </section>

    </div>
  );
}
