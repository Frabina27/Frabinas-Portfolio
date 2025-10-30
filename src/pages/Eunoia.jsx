import React from "react";
import MagicBento from "../components/MagicBento";
import EunoiaImg from "../images/EunoiaImg.png";

export default function Eunoia() {
  const eunoiaItems = [
    {
      title: "Home Screen",
      subtitle: "Gamified daily mood tracking",
      image: EunoiaImg,
    },
    {
      title: "Profile Dashboard",
      subtitle: "Tracks progress and milestones",
      image: EunoiaImg,
    },
    {
      title: "Meditation Flow",
      subtitle: "Interactive breathing exercises",
      image: EunoiaImg,
    },
    {
      title: "Rewards",
      subtitle: "Earn badges and positive feedback",
      image: EunoiaImg,
    },
  ];

  return (
    <div className="eunoia-page" style={{ padding: "40px 20px", color: "white" }}>
      <div className="eunoia-header" style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.8rem", marginBottom: "12px" }}>Eunoia – Wellness Platform</h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", opacity: 0.8 }}>
          Designed a gamified wellness platform during a 24-hour design-a-thon focused on mindfulness,
          progress tracking, and self-care through positive reinforcement.
        </p>
      </div>

      {/* Pass the items to MagicBento */}
      <MagicBento items={eunoiaItems} />

      <div className="eunoia-description" style={{ maxWidth: "800px", margin: "60px auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>My Design Process</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", opacity: 0.85 }}>
          The goal of Eunoia was to create a space where users could reflect on their mental wellness
          while earning rewards for completing daily self-care activities. I began by mapping out
          user flows, sketching core screens, and creating a color palette centered around calm tones.
          Using Figma, I built interactive prototypes and conducted quick peer feedback sessions to
          refine accessibility and usability.
        </p>
      </div>
    </div>
  );
}
