import React from "react";
import ProjectCard from "../components/ProjectCard";
import EunoiaImg from "../images/EunoiaImg.png";

// Export the items array so other files can use it
export const items = [
  {
    title: "Eunoia - Wellness Platform",
    id: 1,
    subtitle: "Designed a gamified wellness platform during a 24hr design-a-thon.",
    tags: ["Branding", "UI/UX"],
    image: EunoiaImg
  },
  { 
    title:'MeteorMate - Roommate Finder', 
    id: 2,
    subtitle:'Designs for a student roommate matching platform.', 
    tags:['UI/UX','Figma']
  },
  {
    title:'Personal Portfolio', 
    id: 5,
    subtitle:'Design system and components for a personal portfolio.', 
    tags:['UI/UX','Figma']
  },
  {
    title:'ACM Archives - Magazine', 
    id: 3,
    subtitle:'Designed pages in a magazine.', 
    tags:['Branding','Canva','Graphic Design']
  },
  {
    title:'Google Student Developer Club', 
    id: 4,
    subtitle:'Designed promotional material and created.', 
    tags:['Branding','Canva','Graphic Design']
  },
];

export default function Designs() {
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
