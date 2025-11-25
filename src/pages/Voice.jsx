import React from "react";
import "../css/Designs.css";
import VoiceImg from "../images/VoiceAssistantImg.png"; // replace with actual screenshot

export default function VoiceVirtualAssistant() {
  const techStack = [
    "Python",
    "ElevenLabs API",
    "Speech-to-Text",
    "Real-Time Audio",
  ];

  return (
    <div className="project-page container">
      {/* Project Title */}
      <h1>Voice Virtual Assistant – Real-Time AI Conversation</h1>

      {/* Description */}
      <p className="project-description">
        The Voice Virtual Assistant uses ElevenLabs' advanced AI models to 
        enable natural, real-time voice conversations. It listens to the user's speech, 
        transcribes it, and generates human-like audio responses using custom voice settings. 
        The assistant can follow a personalized schedule and uses callback functions to 
        manage interactions smoothly.
      </p>

      {/* Main Image */}
      <img
        src={VoiceImg}
        alt="Voice Assistant Interface"
        style={{ width: "50%", borderRadius: 12, margin: "20px 0" }}
      />

      {/* Inspiration */}
      <section className="project-section">
        <h2>Inspiration</h2>
        <p>
          I’ve always been fascinated by AI-powered communication. 
          This project was an exploration of how voice interfaces can create 
          more human-like digital assistants and how APIs like ElevenLabs 
          bring natural, expressive voices to life.
        </p>
      </section>

      {/* What It Does */}
      <section className="project-section">
        <h2>What It Does</h2>
        <div className="info-card">
          <p>
            • Listens to real-time user speech and transcribes it<br />
            • Responds with natural-sounding AI-generated voice<br />
            • Prints conversation transcripts in the terminal<br />
            • Uses callbacks to manage interruptions and response timing<br />
            • Can follow a custom daily schedule and greeting prompt
          </p>
        </div>
      </section>

      {/* How It Was Built */}
      <section className="project-section">
        <h2>How It Was Built</h2>
        <div className="info-card">
          <p>
            • Python for the main logic and integration<br />
            • ElevenLabs API for text-to-speech and agent creation<br />
            • Callback functions to handle response flow<br />
            • Console output for debugging and monitoring live conversations
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="project-section">
        <h2>Built With</h2>
        <div className="tech-pills">
          {techStack.map((tech, i) => (
            <span key={i} className="tech-pill">{tech}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
