import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Designs(){
  const items = [
    {title:'MeteorMate — Roommate Finder', subtitle:'Designs for a student roommate matching platform.', tags:['Branding','UI/UX']},
    {title:'Google Student Developer Club', subtitle:'Event and chapter branding, promotional materials.', tags:['Branding']},
    {title:'Personal Portfolio', subtitle:'Design system and components for a developer portfolio.', tags:['UI/UX']},
    {title:'SyncUp — Event App', subtitle:'Designs for a campus social scheduling app.', tags:['Motion','Illustration']},
  ];
  return (
    <div>
      <h1>Designs</h1>
      <p className="small">A showcase of my creative work</p>
      <div className="grid">
        {items.map((it,i) => <ProjectCard key={i} {...it} />)}
      </div>
    </div>
  );
}
