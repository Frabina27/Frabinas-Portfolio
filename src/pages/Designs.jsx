import React from "react";
import ProjectCard from "../components/ProjectCard";
import EunoiaImg from "../images/EunoiaImg.png";
import MeteorMateImg from "../images/MeteorMate.png";
import GDSCImg from "../images/GDSCImg.png";
import ACM_Page1 from "../images/ACM_Page1.png";
import "../css/Designs.css";

export const items = [
  {
    title: "Eunoia - Wellness Platform",
    id: 1,
    subtitle: "Designed a gamified wellness platform during a 24hr design-a-thon.",
    tags: ["Branding", "UI/UX"],
    image: EunoiaImg,
  },
  {
    title: "MeteorMate - Roommate Finder",
    id: 2,
    subtitle: "Designs for a student roommate matching platform.",
    tags: ["UI/UX", "Figma"],
    image: MeteorMateImg,
  },
  {
    title: "ACM Archives - Magazine",
    id: 3,
    subtitle: "Designed pages in a magazine using Canva.",
    tags: ["Branding", "Canva", "Graphic Design"],
    image: ACM_Page1,
  },
  {
    title: "GDSC UTD - Club Website",
    id: 4,
    subtitle: "Designed the official website for the Google Developer Student Club.",
    tags: ["Branding", "UI/UX", "Figma"],
    image: GDSCImg,
  },
];

export default function Designs() {
  return (
    <div className="designs-page">
      <h1>Designs</h1>
      <p className="small">A showcase of my creative work</p>

      <div className="grid">
        {items.map((it, i) => (
          <ProjectCard key={i} {...it} />
        ))}
      </div>
    </div>
  );
}
