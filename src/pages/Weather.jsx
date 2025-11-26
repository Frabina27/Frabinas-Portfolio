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

      {/* What It Does */}
      <section className="project-section">
        <h2>What It Does</h2>
        <div className="info-card">
          <p>
            • Fetches live weather data from the OpenWeatherMap API<br />
            • Displays temperature conditions<br />
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
            • OpenWeatherMap API for accurate global weather information<br />
            • CSS for layout styling and weather-based color themes<br />
            • Vite for faster development and project setup
          </p>
        </div>
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
