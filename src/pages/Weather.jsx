import React from "react";
import "../css/Designs.css";
import WeatherIMG from "../images/WeatherAppImg.png";

export default function WeatherApp() {
  const techStack = [
    "React.js",
    "OpenWeatherMap API",
    "Axios",
    "CSS",
    "HTML",
    "JavaScript",
    "Vite",
  ];

  return (
    <div className="project-page container">
      {/* Project Title */}
      <h1>Weather App - Real-Time Forecast Dashboard</h1>

      {/* Description */}
      <p className="project-description">
        The Weather App was designed to deliver accurate, real-time weather
        updates in a clean and intuitive interface. Users can search for any
        city and instantly view the temperature, weather conditions, humidity,
        and wind speed. The goal was to build a sleek, responsive dashboard
        that’s easy to use across all devices.
      </p>

      {/* Main Image */}
      <img
        src={WeatherIMG}
        alt="Weather App Overview"
        style={{ width: "100%", borderRadius: 12, margin: "20px 0" }}
      />

      {/* Inspiration */}
      <section className="project-section">
        <h2>Inspiration</h2>
        <p>
          Weather impacts our daily lives — from what we wear to how we travel.
          I wanted to create an app that provides essential weather information
          in seconds without clutter or unnecessary visuals. The project also
          gave me a chance to explore how APIs can bring real-world data into
          front-end projects.
        </p>
      </section>

      {/* What It Does */}
      <section className="project-section">
        <h2>What It Does</h2>
        <div className="info-card">
          <p>
            • Fetches live weather data from the OpenWeatherMap API<br />
            • Displays temperature, humidity, wind speed, and conditions<br />
            • Updates automatically when a user searches for a new city<br />
            • Includes icons and background changes to match current weather<br />
            • Designed to be fully responsive for desktop and mobile users
          </p>
        </div>
      </section>

      {/* How It Was Built */}
      <section className="project-section">
        <h2>How It Was Built</h2>
        <div className="info-card">
          <p>
            • React.js for the front-end structure and dynamic rendering<br />
            • Axios for API calls to fetch real-time data<br />
            • OpenWeatherMap API for accurate global weather information<br />
            • CSS for layout styling and weather-based color themes<br />
            • Vite for faster development and project setup
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="project-section">
        <h2>Challenges I Faced</h2>
        <div className="info-card">
          <p>
            Handling asynchronous API responses and managing errors for invalid
            city names were key challenges. It was also important to design a
            layout that adapts seamlessly to various screen sizes while keeping
            the interface visually engaging.
          </p>
        </div>
      </section>

      {/* Accomplishments */}
      <section className="project-section">
        <h2>Accomplishments</h2>
        <p>
          Successfully created a functional, responsive, and visually appealing
          weather dashboard that connects to a real-world API and displays
          dynamic updates instantly.
        </p>
      </section>

      {/* Design Process */}
      <hr className="section-divider" />

      <section className="design-process">
        <h2>Design Process</h2>
        <div className="process-steps">
          <div className="step-card">
            <h4>Empathize</h4>
            <p>
              Understood how users check weather and what information is most
              valuable to them.
            </p>
          </div>
          <div className="step-card">
            <h4>Define</h4>
            <p>
              Focused on key goals: fast access to forecasts, easy navigation,
              and visual clarity.
            </p>
          </div>
          <div className="step-card">
            <h4>Ideate</h4>
            <p>
              Brainstormed layout ideas, data visualization, and interactive
              features for daily use.
            </p>
          </div>
          <div className="step-card">
            <h4>Prototype</h4>
            <p>
              Created wireframes and clickable prototypes to test layout and
              functionality.
            </p>
          </div>
          <div className="step-card">
            <h4>Test</h4>
            <p>
              Gathered feedback to refine usability, mobile responsiveness, and
              overall readability.
            </p>
          </div>
        </div>
      </section>

      {/* Iterations */}
      <hr className="section-divider" />

      <section className="iteration">
        <h2>Iteration 1</h2>
        <p>
          Initial design focused on basic weather information and static icons.
          Feedback indicated the need for clearer visuals and interactive
          elements.
        </p>
        <div className="iteration-images">
          <img
            src="../images/weather_iter1.png"
            alt="Iteration 1"
            style={{ width: "100%", margin: "12px 0" }}
          />
        </div>
      </section>

      <section className="iteration">
        <h2>Iteration 2</h2>
        <p>
          Added dynamic weather icons, hourly forecast graphs, and responsive
          layouts for mobile and desktop. The interface became more visually
          engaging and user-friendly.
        </p>
        <div className="iteration-images">
          <img
            src="../images/weather_iter2.png"
            alt="Iteration 2"
            style={{ width: "100%", margin: "12px 0" }}
          />
        </div>
      </section>

      {/* Inspiration & Learnings */}
      <section className="project-section">
        <h2>Inspiration & Learnings</h2>
        <p>
          Inspired by simplicity and user-centered design principles, this
          project taught me how to combine API data with clean, interactive
          interfaces. Learned the importance of clarity, responsiveness, and
          visual hierarchy in app design.
        </p>
      </section>

      {/* What I Learned */}
      <section className="project-section">
        <h2>What I Learned</h2>
        <p>
          Gained hands-on experience with APIs, asynchronous JavaScript, and
          data handling in React. This project helped me understand how to
          manage state effectively and improve error handling for better user
          experience.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="project-section">
        <h2>Built With</h2>
        <div className="tech-pills">
          {techStack.map((tech, i) => (
            <span key={i} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
