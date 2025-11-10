import React from "react";
import "../css/Resume.css";


export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>Resume</h1>
        <p className="small">My professional journey and experiences</p>
      </div>

      {/* WORK EXPERIENCE SECTION */}
      <div className="section-divider">
        <h2>Work Experience</h2>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>Wize Computing Academy</h3>
                <div className="timeline-subtitle">Instructor</div>
              </div>
              <div className="timeline-date">Aug 2025 - Present</div>
            </div>
            <div className="timeline-content">
              <p>Instruct middle school students in programming and robotics through interactive lessons and hands-on projects</p>
              <p>Introduce core CS concepts such as loops, conditionals, and variables using beginner-friendly tools</p>
              <p>Foster classroom positivity, problem-solving, individualism, creativity, and teamwork through tailored lesson plans</p>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>Grade Potential Tutoring</h3>
                <div className="timeline-subtitle">Private Tutor</div>
              </div>
              <div className="timeline-date">Sep 2024 - Present</div>
            </div>
            <div className="timeline-content">
              <p>Specialized instructor in a variety of K-12 and college-level lessons</p>
              <p>Provided individualized tutoring on SAT/ACT Prep and college-level Computer Science such as Python and C++</p>
              <p>Developed interactive project-based learning to enhance understanding in students</p>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>Previous Role</h3>
                <div className="timeline-subtitle">Position Title</div>
              </div>
              <div className="timeline-date">Month Year - Month Year</div>
            </div>
            <div className="timeline-content">
              <p>Description of your responsibilities and achievements</p>
              <p>Key accomplishment or project you worked on</p>
              <p>Impact you made or skills you developed</p>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>Another Previous Role</h3>
                <div className="timeline-subtitle">Position Title</div>
              </div>
              <div className="timeline-date">Month Year - Month Year</div>
            </div>
            <div className="timeline-content">
              <p>Description of your responsibilities and achievements</p>
              <p>Key accomplishment or project you worked on</p>
              <p>Impact you made or skills you developed</p>
            </div>
          </div>
        </div>
      </div>

      {/* CLUBS & ORGANIZATIONS SECTION */}
      <div className="section-divider">
        <h2>Clubs & Organizations</h2>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>ACM Development</h3>
                <div className="timeline-subtitle">Design Lead</div>
              </div>
              <div className="timeline-date">Jan 2025 - Present</div>
            </div>
            <div className="timeline-content">
              <p>Designed a web platform aimed at simplifying the roommate search process for college students</p>
              <p>Created wireframes and high-fidelity layouts in Figma, establishing a cohesive user experience</p>
              <p>Worked closely with developers to ensure seamless implementation of UI designs</p>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>Club Name</h3>
                <div className="timeline-subtitle">Your Role</div>
              </div>
              <div className="timeline-date">Month Year - Present</div>
            </div>
            <div className="timeline-content">
              <p>Description of your involvement and contributions</p>
              <p>Key projects or initiatives you led or participated in</p>
              <p>Skills developed or impact made through this organization</p>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>Another Organization</h3>
                <div className="timeline-subtitle">Member / Committee Role</div>
              </div>
              <div className="timeline-date">Month Year - Month Year</div>
            </div>
            <div className="timeline-content">
              <p>Description of your involvement and contributions</p>
              <p>Key projects or initiatives you led or participated in</p>
              <p>Skills developed or impact made through this organization</p>
            </div>
          </div>
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div className="section-divider">
        <h2>Education</h2>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>University Name</h3>
                <div className="timeline-subtitle">Bachelor's Degree in Your Major</div>
              </div>
              <div className="timeline-date">Expected Graduation</div>
            </div>
            <div className="timeline-content">
              <p>GPA: X.XX (if you want to include it)</p>
              <p>Relevant coursework: Course 1, Course 2, Course 3</p>
              <p>Honors or awards received</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}