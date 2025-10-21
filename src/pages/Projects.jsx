import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects(){
  const items = [
    {title:'Weather App', subtitle:'A responsive weather app using public APIs.', tags:['React','API']},
    {title:'Virtual Voice Assistant', subtitle:'Prototype voice assistant for desktop.', tags:['Python','API']},
    {title:'Python Guessing Game', subtitle:'One of my favorite terminal guessing games.', tags:['Python']},
    {title:'Galaga Clone', subtitle:'Arcade shooter remake using Python.', tags:['JavaScript','Python']},
    {title:'Snake Game', subtitle:'Classic Snake game remake..', tags:['C++']},
  ];
  return (
    <div>
      <h1>Projects</h1>
      <p className="small">A few of my personal/academic projects!</p>
      <div className="grid">
        {items.map((it,i) => <ProjectCard key={i} {...it} />)}
      </div>
    </div>
  );
}
