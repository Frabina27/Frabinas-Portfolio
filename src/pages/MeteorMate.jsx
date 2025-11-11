import React from "react";
import MeteorMateImg from "../images/MeteorMate.png";
import MMCreateAccount from "../images/MMCreateAccount.png";
import MMPreferences from "../images/MMPreferences.png";
import MMProfile from "../images/MMProfile.png";
import MMScreen from "../images/MMScreen.png";
import MMQuestion from "../images/MMQuestion.png";

import "../css/Designs.css";

export default function MeteorMate() {
  return (
    <div className="project-page container">

      {/* Project Title */}
      <h1>ACM Development - MeteorMate</h1>

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
          We noticed that the current system was inefficient and stressful so we decided to create a new one!
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
            • Profile creation capturing lifestyle, habits, and personal preferences.<br />
            • Compatibility matching through a question set.<br />
            • Search & filter matches by dorm, major, habits, or interests.<br />
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
            <p>Spoke with students to understand roommate challenges and expectations.</p>
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
      {/* Feature 1 */}
      <section className="iteration">
        <h2>Page 1: Creat Account</h2>
          <p>
            We designed a simple and intuitive Create Account process so users can quickly sign up and start their MeteorMate journey. The flow emphasizes ease and clarity, making onboarding smooth for first-time users.        
          </p>
        <div className="iteration-images">
          <img src={MMCreateAccount} alt="Create Account Page" style={{ width: "100%", margin: "12px 0" }} />
        </div>
      </section>

      {/* Feature 2 */}
      <section className="iteration">
        <h2>Page 2: Profile</h2>
        <p>
          The Questionnaire helps users express their lifestyle preferences and expectations. By answering key questions, the system can generate better roommate matches, while the design keeps the experience simple and user-friendly. </p>
        <div className="iteration-images">
          <img src={MMProfile} alt="Profile Page" style={{ width: "100%", margin: "12px 0" }} />

        </div>
      </section>

      {/* Feature 3 */}
      <section className="iteration">
        <h2>Page 3: Preferences</h2>
        <p>
          Users can build their Profile by adding personal details, preferences, and roommate habits. The profile setup is designed to be engaging while giving the system the information it needs to match users effectively.
        </p>
        <div className="iteration-images">
          <img src={MMPreferences} alt="Preferences Page" style={{ width: "70%", margin: "12px 0" }} />
          <img src={MMQuestion} alt="Question Page" style={{ width: "72%", margin: "12px 0" }} />

        </div>
      </section>
      

      {/* Feature 4 */}
      <section className="iteration">
        <h2>Page 4: Main Page</h2>
        <p>
          The Main Page is the hub where users can explore potential matches and navigate the app. The current design is a work in progress, with placeholders and layout concepts ready for further refinement, ensuring that the final version will be fully interactive and polished. </p>
        <div className="iteration-images">
          <img src={MMScreen} alt="Main Page" style={{ width: "100%", margin: "12px 0" }} />

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

    </div>
  );
}
