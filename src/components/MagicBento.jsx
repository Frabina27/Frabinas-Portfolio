import React from "react";
import "./MagicBento.css";

export default function MagicBento({ items = [] }) {
  return (
    <div className="magic-bento-grid">
      {items.map((item, i) => (
        <div key={i} className="magic-bento-card">
          {item.image && <img src={item.image} alt={item.title} />}
          <div className="magic-bento-content">
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
