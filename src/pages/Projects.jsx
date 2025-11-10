import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../css/Designs.css"; // same styling!

export default function Projects() {
  const items = [
    { title: "Prodigy - HACKUTD", id: 5, subtitle: "Machine learning intern project.", tags: ["Python", "ML"] },
    { title: "Weather App", id: 6, subtitle: "Fetches live weather data.", tags: ["React", "API"] },
    { title: "Voice Assistant", id: 7, subtitle: "Desktop AI assistant.", tags: ["Python"] },
    { title: "Guessing Game", id: 8, subtitle: "Fun Python terminal game.", tags: ["Python"] },
    { title: "Snake Game", id: 9, subtitle: "Retro snake remake.", tags: ["C++"] },
  ];

  return (
    <div className="designs-page">
      <h1>Projects</h1>
      <p className="small">A showcase of my technical work</p>
      <div className="grid">
        {items.map((it, i) => (
          <ProjectCard key={i} {...it} />
        ))}
      </div>
    </div>
  );
}
