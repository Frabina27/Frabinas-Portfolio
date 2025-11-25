import React from "react";
import EunoiaImg from "../images/Eunoia/EunoiaImg.png"
import EunoiaFT1IMG1 from "../images/Eunoia/EunoiaFT1IMG1.png";
import EunoiaDashImg from "../images/Eunoia/EunoiaDash.png";
import EunoiaFT2IMG1 from "../images/Eunoia/EunoiaFT2IMG1.png";
import EunoiaFT3IMG1 from "../images/Eunoia/EunoiaFT3IMG1.png";
import EunoiaFT4 from "../images/Eunoia/EunoiaFT4.png";
import EunoiaFT4IMG1 from "../images/Eunoia/EunoiaFT4IMG1.png";

import "../css/Designs.css";

export default function Eunoia() {
  return (
    <div className="project-page container">

      {/* Project Title */}
      <h1>Eunoia - Wellness Platform</h1>

      {/* Project Description */}
      <p className="project-description">
        Eunoia reimagines workplace wellness in a fun and unique way!
        Inspired by CBRE’s human-centered approach, we designed a gamified digital environment where mood check-ins and team growth feel like leveling up in a pixel adventure game. 
        Our goal was to make workplace wellness interactive, accessible, and enjoyable.
      </p>

      {/* Main Image */}
      <img
        src={EunoiaDashImg}
        alt="Eunoia Main"
        style={{ width: "75%", borderRadius: 12, margin: "20px 0"}}
      />

      {/* Project Details */}
      <section className="project-section">
        <h2>Background</h2>
        <p>
          Eunoia was designed during a 24-hour design-a-thon to combat remote worker burnout by prioritizing breaks, hydration, walks, and more! 
          The project aimed to transform personal wellness into an engaging experience that encourages self-reflection, collaboration, and consistent progress.
        </p>
      </section>

      <section className="project-section">
        <h2>Primary Research</h2>
        <div className="info-card">
          <p>
            We researched workplace wellness trends and human-centered design practices, focusing on ways to make wellness fun and engaging. 
            Key insights included the importance of mood tracking, visual feedback, and something to encourage regular participation.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h2>Competitive Analysis</h2>
        <div className="info-card">
          <p>
            We analyzed existing wellness apps and gamified productivity tools, noting that none of them provided the features we were looking for in one location.
            Eunoia’s design addressed these gaps with interactive dashboards, avatars, and level progression.
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
            <p>We initially conducted research to identify some of the problems with remote work which was lack of motivation and ease of burnout.</p>
          </div>
          <div className="step-card">
            <h4>Define</h4>
            <p>We identified user goals such as mood trakcing, wellness, and time management as well as break management.</p>
          </div>
          <div className="step-card">
            <h4>Ideate</h4>
            <p>We brainstormed many designs for our product but the 8-bit pixel theme stood out the most.</p>
          </div>
          <div className="step-card">
            <h4>Prototype</h4>
            <p>We created interactive Figma prototypes emphasizing 8-bit pixel aesthetics and smooth user flows.</p>
          </div>
          <div className="step-card">
            <h4>Test</h4>
            <p>We gathered feedback to refine usability, clear up the visual design, and balance between retro 8-bit as well as modern work space.</p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Feature 1 */}
      <section className="iteration">
        <h2>Feature 1: Pomodoro</h2>
        <p>
          We realized how important time management is when working remotely 
          We designed a pomodoro timer to help users stay on track with their work 
          while also reminding them to take breaks.
        </p>
        <div className="iteration-images">
        <img src={EunoiaFT1IMG1} alt="Feature 1" style={{ width: "50%", margin: "12px 0" }} />
        </div>
      </section>

      {/* Feature 2 */}
      <section className="iteration">
        <h2>Feature 2: Daily Tasks</h2>
        <p>
          We designed Daily Tasks to help users build healthy habits and stay productive every day.
          From drinking enough water and taking a walk to using the Pomodoro timer, completing tasks earns coins and motivates users to keep up with their daily goals.        </p>
        <div className="iteration-images">
        <img src={EunoiaFT2IMG1} alt="Feature 1" style={{ width: "50%", margin: "12px 0" }} />
        </div>
      </section>

      {/* Feature 3 */}
      <section className="iteration">
        <h2>Feature 3: Stats Overview</h2>
        <p>
          We created a Stats Overview so users can see how they stack up against others in the company.
          Track who’s completing their daily tasks, earn recognition, and get motivated by seeing your progress climb the leaderboard        </p>
        <div className="iteration-images">
        <img src={EunoiaFT3IMG1} alt="Feature 1" style={{ width: "50%", margin: "12px 0" }} />
        </div>
      </section>

      {/* Feature 3 */}
      <section className="iteration">
        <h2>Feature 4: Character Customization!</h2>
        <p>
          We built Character Customization so users can bring their avatars to life.
          Use the coins you earn from completing daily tasks to unlock outfits, accessories, and fun items! Which makes the characters fully customizable while maintaining motivation to reach daily wellness goals!</p>
        <div className="iteration-images">
        <img src={EunoiaFT4} alt="Feature 1" style={{ width: "45%", margin: "12px 0", marginRight: "4%" }} />
        <img src={EunoiaFT4IMG1} alt="Feature 1" style={{ width: "45%", margin: "12px 0" }} />
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
    </div>
  );
}
