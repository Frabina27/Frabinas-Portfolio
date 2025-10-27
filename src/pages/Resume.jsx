import React from "react";

export default function Resume(){
  return (
    <div>
      <h1>Resume</h1>
      <p className="small">My professional journey</p>
      <div className="card" style={{marginTop:12}}>
        <h3>Relevant Work Experience</h3>

        <div style={{display:'flex', justifyContent:'space-between', gap:12}}>
          <div style={{flex:1}}>
            <h4>Wize Computing Academy - Instructor</h4>
              <p className="small"> • Instruct middle school students in programming and robotics through interactive lessons and hands-on projects. </p>
              <p className="small">• Introduce core CS concepts such as loops, conditionals, and variables using beginner-friendly tools. </p>
              <p className="small"> • Fostering classroom positivity, problem-solving, individualism, creativity, and teamwork through tailored lesson plans. </p>

          </div>
          <div className="small" style={{minWidth:100, textAlign:'right'}}>Aug 2025 - Present</div>
        </div>

      <div style={{display:'flex', justifyContent:'space-between', gap:12}}>
          <div style={{flex:1}}>
            <h4>ACM Development - Design Lead</h4>
            <div className="small"></div>
              <p className="small"> • Designed a web platform aimed at simplifying the roommate search process for college students. </p>
              <p className="small">• Created wireframes and high-fidelity layouts in Figma, establishing a cohesive user experience. </p>
              <p className="small"> • Worked closely with developers to ensure seamless implementation of UI designs. </p>

          </div>
          <div className="small" style={{minWidth:100, textAlign:'right'}}>Jan 2025 - Present</div>
        </div>

        <div style={{display:'flex', justifyContent:'space-between', gap:12}}>
          <div style={{flex:1}}>
            <h4>Grade Potential Tutoring - Private Tutor</h4>
              <p className="small"> • Actively specialized instructor in a variety of K-12 and college-level lessons. </p>
              <p className="small">• Provided individualized tutoring on SAT/ACT Prep and college-level Computer Science such as Python, and C++ </p>
              <p className="small"> • Developed interactive project-based learning to enhance understanding in students. </p>

          </div>
          <div className="small" style={{minWidth:100, textAlign:'right'}}>Sep 2024 - Present</div>
        </div>
  
      </div>
    </div>
  );
}
