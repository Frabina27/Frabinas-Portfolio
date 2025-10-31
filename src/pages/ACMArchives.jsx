import React from "react";
import EunoiaImg from "../images/EunoiaImg.png";
import "../css/Designs.css";

export default function Eunoia() {
  return (
    <div className="project-page container">

      {/* Project Title */}
      <h1>Eunoia - Wellness Platform</h1>

      {/* Project Description */}
      <p className="project-description">
        Designed a gamified wellness platform during a 24hr design-a-thon. This project focuses on creating engaging, user-friendly wellness experiences.
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
        <p>Write about the project background here...</p>
      </section>

      <section className="project-section">
        <h2>Primary Research</h2>
        <div className="info-card">
          <p>Write about your primary research methods and findings...</p>
        </div>
      </section>

      <section className="project-section">
        <h2>Competitive Analysis</h2>
        <div className="info-card">
          <p>Write about competitors and insights...</p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Design Process Steps */}
      <section className="design-process">
        <h2>The Design Process</h2>
        <div className="process-steps">
          <div className="step-card">
            <h4>Empathize</h4>
            <p>Describe empathizing with users here.</p>
          </div>
          <div className="step-card">
            <h4>Define</h4>
            <p>Describe problem definition here.</p>
          </div>
          <div className="step-card">
            <h4>Ideate</h4>
            <p>Describe brainstorming and idea generation.</p>
          </div>
          <div className="step-card">
            <h4>Prototype</h4>
            <p>Describe prototyping methods used.</p>
          </div>
          <div className="step-card">
            <h4>Test</h4>
            <p>Describe testing and feedback process.</p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Iteration 1 */}
      <section className="iteration">
        <h2>Iteration 1</h2>
        <p>Describe iteration 1 improvements or changes here.</p>
        <div className="iteration-images">
          <img src="../images/iteration1_1.png" alt="Iteration 1 Image 1" style={{ width: "100%", margin: "12px 0" }} />
          <img src="../images/iteration1_2.png" alt="Iteration 1 Image 2" style={{ width: "100%", margin: "12px 0" }} />
        </div>
      </section>

      {/* Iteration 2 */}
      <section className="iteration">
        <h2>Iteration 2</h2>
        <p>Describe iteration 2 improvements or changes here.</p>
        <div className="iteration-images">
          <img src="../images/iteration2_1.png" alt="Iteration 2 Image 1" style={{ width: "100%", margin: "12px 0" }} />
          <img src="../images/iteration2_2.png" alt="Iteration 2 Image 2" style={{ width: "100%", margin: "12px 0" }} />
        </div>
      </section>
    </div>
  );
}
