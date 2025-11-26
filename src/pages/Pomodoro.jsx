import React from "react";
import PomodoroIMG from "../images/PomodoroIMG.png";
import "../css/Designs.css";

export default function Pomodoro() {
  return (
    <div className="project-page container">

      {/* Project Title */}
      <h1>Pomodoro - Focus Timer</h1>

      {/* Project Description */}
      <p className="project-description">
        The Pomodoro Timer is a simple productivity tool built to help users
        manage focus and rest cycles. Inspired by the Pomodoro Technique, it
        allows users to work for 25-minute intervals followed by short breaks,
        promoting concentration and consistent productivity.
      </p>

      {/* Main Image */}
      <img
        src={PomodoroIMG}
        alt="Pomodoro App Interface"
        style={{ width: "100%", borderRadius: 12, margin: "20px 0" }}
      />

      {/* Project Overview */}
      <section className="project-section">
        <h2>Overview</h2>
        <p>
          This project is a lightweight web app designed to encourage healthy
          work habits through time-blocking. It features a simple timer
          interface, clean visuals, and an intuitive start/pause/reset system.
        </p>
      </section>

      {/* Features */}
      <section className="project-section">
        <h2>Features</h2>
        <ul>
          <li>25-minute focus sessions with built-in short breaks</li>
          <li>Minimal, distraction-free interface</li>
          <li>Timer animations using basic CSS and JavaScript</li>
          <li>Optional persistence using browser local storage</li>
        </ul>
      </section>

      {/* Implementation Details */}
      <section className="project-section">
        <h2>Implementation</h2>
        <p>
          The Pomodoro Timer was implemented using HTML, CSS, and JavaScript.
          The timer logic uses JavaScript’s <code>setInterval()</code> to
          handle countdowns, while CSS handles the circular timer animation.
          This design keeps the app lightweight, fast, and responsive across
          devices.
        </p>
      </section>

      {}
      <section className="project-section">
        <h2>Sample Timer Logic</h2>
        <pre
          style={{
            background: "#1e1e1e",
            color: "#e6e6e6",
            padding: "16px",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
{`let time = 25 * 60;
let timer = setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  console.log(\`\${minutes}:\${seconds < 10 ? "0" : ""}\${seconds}\`);
  time--;
  if (time < 0) clearInterval(timer);
}, 1000);`}
        </pre>
      </section>

      {/* What I Learned */}
      <section className="project-section">
        <h2>What I Learned</h2>
        <p>
          Through this project, I learned how to implement real-time updates in
          JavaScript, structure modular functions, and apply smooth UI
          animations. It also helped me improve my understanding of time-based
          user interfaces and simple app logic design.
        </p>
      </section>
    </div>
  );
}
