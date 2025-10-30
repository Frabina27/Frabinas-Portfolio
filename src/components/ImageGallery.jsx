import React from "react";

export default function ImageGallery({ images }) {
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Gallery ${i + 1}`}
          style={{ width: "30%", borderRadius: 8 }}
        />
      ))}
    </div>
  );
}
