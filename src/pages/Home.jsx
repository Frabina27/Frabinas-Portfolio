import React from "react";
import FrabinaPfp from "../images/FrabinaPfp.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      {/* === HERO SECTION === */}
      <section className="hero-section container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1 className="hero-title">
            Hello, I’m <span className="accent">Frabina</span>, <br />
            a <span className="accent">UX/UI Designer</span> <br />
            and <span className="accent">Programmer!</span>
          </h1>

          <div className="hero-buttons">
            <a href="/resume" className="btn" download>
              Download My Resume
            </a>
            <a href="/projects" className="btn">
              View Projects
            </a>
          </div>

          <p className="hero-description">
            I’m a passionate designer and developer who loves creating elegant,
            user-focused interfaces. My goal is to bridge creativity and
            technology to build meaningful, accessible experiences.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="floating-image">
            <img src={FrabinaPfp} alt="Frabina portrait" />
          </div>
        </div>
      </section>

      {/* === SKILLS SECTION === */}
      <section className="skills-section container">
        <div className="skill-card">
          <h3>Front-End</h3>
          <p>HTML, CSS, JavaScript</p>
        </div>
        <div className="skill-card">
          <h3>Languages</h3>
          <p>Java, Python</p>
        </div>
        <div className="skill-card">
          <h3>Design</h3>
          <p>Figma, Canva, Adobe</p>
        </div>
      </section>
    </div>
  );
}
