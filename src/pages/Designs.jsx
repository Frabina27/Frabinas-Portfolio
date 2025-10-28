import React from "react";
import ProjectCard from "../components/ProjectCard";
import EunoiaImg from "../images/EunoiaImg.png";

export default function Designs(){
  const items = 
  [
{
    title: "Eunoia - Wellness Platform",
    subtitle: "Designed a gamified wellness platform during a 24hr design-a-thon.",
    tags: ["Branding", "UI/UX"],
    image: eunoiaImg,
    link: "/designs/eunoia"
  },
      {title:'MeteorMate — Roommate Finder', subtitle:'Designs for a student roommate matching platform.', tags:['UI/UX','Figma']},
        {title:'ACM Archives - Magazine', subtitle:'Designed pages in a magazine.', tags:['Branding','Canva','Graphic Design']},
    {title:'Google Student Developer Club', subtitle:'Designed promotional material and created.', tags:['Branding','Canva','Graphic Design']},
    {title:'Personal Portfolio', subtitle:'Design system and components for a developer portfolio.', tags:['UI/UX','Figma']},
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
