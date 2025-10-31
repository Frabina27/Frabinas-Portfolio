import React from "react";
import MeteorMateImg from "../images/MeteorMate.png";
import "../css/Designs.css";

export default function MeteorMate() {
  return (
    <div className="project-page container">

      {/* Project Title */}
      <h1>MeteorMate - Roommate Finder</h1>

      {/* Project Description */}
      <p className="project-description">
        Designed the UI/UX for a student-focused roommate matching platform. 
        MeteorMate helps students find compatible roommates through a fun, easy-to-use interface.
      </p>

      {/* Main Image */}
      <img
        src={MeteorMateImg}
        alt="MeteorMate UI Screenshot"
        style={{ width: "100%", borderRadius: 12, margin: "20px 0" }}
      />

      {/* Project Details */}
      <section className="project-section">
        <h2>Background</h2>
        <p>
          Students often struggle to find roommates with compatible lifestyles and preferences. 
          MeteorMate was created to simplify this process, helping students connect with suitable roommates quickly and confidently.
        </p>
      </section>

      <section className="project-section">
        <h2>User Needs & Research</h2>
        <div className="info-card">
          <p>
            We focused on understanding student challenges in finding roommates. Through interviews and surveys with peers, we identified key needs: 
            compatibility in lifestyle, clarity of information, and ease of communication. Students wanted a simple, engaging interface that helps them find roommates they feel comfortable living with.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h2>Main Features</h2>
        <div className="info-card">
          <p>
            - Profile creation capturing lifestyle, habits, and personal preferences.<br />
            - Compatibility matching through a question set.<br />
            - Search & filter matches by dorm, major, habits, or interests.<br />
            - Chat feature to connect with potential roommates directly.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Design Process Steps */}
      <section className="design-process">
        <h2>Design Process</h2>
        <div className="process-steps">
          <div className="step-card">
            <h4>Empathize</h4>
            <p>Interviewed students to understand roommate challenges and expectations.</p>
          </div>
          <div className="step-card">
            <h4>Define</h4>
            <p>Identified key pain points: compatibility, clarity, and communication.</p>
          </div>
          <div className="step-card">
            <h4>Ideate</h4>
            <p>Brainstormed features like matching questions, filters, and chat for direct connection.</p>
          </div>
          <div className="step-card">
            <h4>Prototype</h4>
            <p>Designed interactive UI flows in Figma, including profiles, cards, and chat screens.</p>
          </div>
          <div className="step-card">
            <h4>Test</h4>
            <p>Validated usability with peer feedback and iterated on layout and flow.</p>
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
      
      {/* Development / Accomplishments */}
      <section className="iteration">
        <h2>Accomplishments</h2>
        <p>
          Successfully designed a complete Figma prototype for MeteorMate, addressing student needs for compatibility and communication. 
          Created a clean, engaging interface that guides users from creating profiles to finding and connecting with suitable roommates.
        </p>
      </section>

      <section className="iteration">
        <h2>What I Learned</h2>
        <p>
          Learned how to design user-focused platforms, create interactive prototypes in Figma, and translate research insights into functional UI flows for students.
        </p>
      </section>

    </div>
  );
}
