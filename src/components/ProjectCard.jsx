import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, subtitle, tags, image }) {
  return (
    <div className="card card-hover">
      <div
        style={{
          height: 180,
          borderRadius: 10,
          overflow: "hidden",
          background: image
            ? "none"
            : "linear-gradient(135deg, rgba(168,216,255,0.08), rgba(10,30,60,0.04))",
        }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.9,
            }}
          />
        )}
      </div>

      <div style={{ paddingTop: 12 }}>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h3>{title}</h3>
          <div className="small">{tags?.join(" • ")}</div>
        </div>
        <p className="small" style={{ marginTop: 8 }}>{subtitle}</p>

        <div style={{ marginTop: 12 }}>
          {/* React Router Link instead of <a> */}
          <Link className="btn" to={`/projects/${id}`}>
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}
