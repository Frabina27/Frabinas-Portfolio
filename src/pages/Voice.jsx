import React from "react";
import "../css/Designs.css";
import ProdigyImg from "../images/VoiceAssistantImg.png"; // replace with actual screenshot

export default function VoiceVirtualAssistant() {
  const techStack = [
    "Python",
    "ElevenLabs API",
    "dotenv",
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
        src={ProdigyImg}
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
            • dotenv for secure API key management<br />
            • Callback functions to handle response flow<br />
            • Console output for debugging and monitoring live conversations
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="project-section">
        <h2>Challenges I Faced</h2>
        <div className="info-card">
          <p>
            Managing real-time audio input/output and handling interruptions 
            during speech was complex. I also had to carefully manage API authentication 
            and make sure the assistant stayed responsive without lag.
          </p>
        </div>
      </section>

      {/* Accomplishments */}
      <section className="project-section">
        <h2>Accomplishments</h2>
        <p>
          Successfully implemented a conversational AI that feels natural and responsive. 
          The assistant handles live voice input and responds instantly — 
          demonstrating the power of ElevenLabs’ voice technology combined with Python scripting.
        </p>
      </section>

      {/* What I Learned */}
      <section className="project-section">
        <h2>What I Learned</h2>
        <p>
          Learned how to integrate voice APIs, manage audio streams, 
          and securely handle environment variables in Python. 
          This project strengthened my understanding of real-time communication systems 
          and API-driven AI tools.
        </p>
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
