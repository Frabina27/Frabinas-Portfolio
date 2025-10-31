import React from "react";
import { useParams, Link } from "react-router-dom";
import { items } from "./Designs";
import ImageGallery from "../components/ImageGallery";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = items.find(p => p.id === parseInt(id));

  if (!project) return <p>Project not found!</p>;

  const currentIndex = items.findIndex(p => p.id === parseInt(id));
  const prevProject = items[currentIndex - 1];
  const nextProject = items[currentIndex + 1];

  // Placeholder image arrays
  const brandingImages = [
    "https://via.placeholder.com/200x200?text=Logo",
    "https://via.placeholder.com/200x200?text=Color+Scheme",
    "https://via.placeholder.com/200x200?text=Fonts",
  ];

  const prototypeImages = [
    "https://via.placeholder.com/200x300?text=Wireframe+1",
    "https://via.placeholder.com/200x300?text=Wireframe+2",
    "https://via.placeholder.com/200x300?text=Wireframe+3",
  ];

  const testingImages = [
    "https://via.placeholder.com/200x300?text=Testing+1",
    "https://via.placeholder.com/200x300?text=Testing+2",
  ];

  return (
    <div className="project-details" style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <h1>{project.title}</h1>
      {project.image && <img src={project.image} alt={project.title} style={{ width: "100%", borderRadius: 10, marginBottom: 16 }} />}
      
      <div className="tags" style={{ marginBottom: 24 }}>
        {project.tags?.map((t, i) => <span key={i} style={{ marginRight: 8 }}>{t}</span>)}
      </div>

      {/* Description / Summary / Tools / Background */}
      <section>
        <h2>Description</h2>
        <p>Short description of the project and its goals.</p>

        <h3>Summary</h3>
        <p>Concise summary of outcomes.</p>

        <h3>Tools</h3>
        <p>Figma, Canva, Adobe Illustrator, etc.</p>

        <h3>Background</h3>
        <p>Explain why this project was created and the context.</p>
      </section>

      
      <section>
        <h2>Understanding the Process</h2>
        <p>How you approached the project and strategy.</p>

        <h3>Primary Research</h3>
        <p>Interviews, surveys, observations, etc.</p>

        <h3>Competitive Analysis</h3>
        <p>Insights from analyzing competitors or similar products.</p>

        <h3>Persona Creation</h3>
        <p>Description of user persona(s) with goals, pain points, and motivations.</p>
      </section>

      {/* Design Process */}
      <section>
        <h2>Design Process</h2>

        <h3>Empathize</h3>
        <p>How you gathered insights from users.</p>
        <img src="https://via.placeholder.com/600x300?text=Empathize" alt="Empathize" style={{ width: "100%", marginBottom: 16 }} />

        <h3>Define</h3>
        <p>Defining the problem or challenge.</p>
        <img src="https://via.placeholder.com/600x300?text=Define" alt="Define" style={{ width: "100%", marginBottom: 16 }} />

        <h3>Ideate</h3>
        <p>Brainstorming ideas and solutions.</p>
        <img src="https://via.placeholder.com/600x300?text=Ideate" alt="Ideate" style={{ width: "100%", marginBottom: 16 }} />

        <h3>Prototype</h3>
        <p>Low- or high-fidelity prototypes:</p>
        <ImageGallery images={prototypeImages} />

        <h3>Testing</h3>
        <p>Usability testing, feedback, iterations.</p>
        <ImageGallery images={testingImages} />
      </section>

      {/* Branding */}
      <section>
        <h2>Branding</h2>
        <p>Logo, color scheme, fonts, and other visual elements.</p>
        <ImageGallery images={brandingImages} />
      </section>

      {/* Design Details */}
      <section>
        <h2>Design Details</h2>
        <p>Additional details about design choices, micro-interactions, or style decisions.</p>
      </section>

      {/* Navigation */}
      <div className="navigation" style={{ marginTop: 32, display: "flex", justifyContent: "space-between" }}>
        {prevProject && <Link to={`/projects/${prevProject.id}`}>&lt; Previous Project</Link>}
        {nextProject && <Link to={`/projects/${nextProject.id}`}>Next Project &gt;</Link>}
      </div>

      <div style={{ marginTop: 16 }}>
        <Link to="/designs">Back to Designs</Link>
      </div>
    </div>
  );
}
