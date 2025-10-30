import React from "react";
import "./MagicBento.css";

export default function MagicBento({ items }) {
  return (
    <div className="bento-grid">
      {items.map((item, i) => (
        <div key={i} className={`bento-card card-${(i % 5) + 1}`}>
          <div className="bento-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="bento-tags">
              {item.tags?.map((tag, j) => (
                <span key={j}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
