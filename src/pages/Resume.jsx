import React from "react";

export default function Resume(){
  return (
    <div>
      <h1>Resume</h1>
      <p className="small">My professional journey and qualifications</p>
      <div className="card" style={{marginTop:12}}>
        <h3>Relevant Experience</h3>
        <div style={{display:'flex', justifyContent:'space-between', gap:12}}>
          <div style={{flex:1}}>
            <h4>UI/UX Designer & Frontend Developer</h4>
            <div className="small">Digital Creative Studio — New York, NY</div>
            <p className="small">Designed and developed responsive websites for clients across various industries. Collaborated with cross-functional teams to deliver polished experiences.</p>
          </div>
          <div className="small" style={{minWidth:100, textAlign:'right'}}>2019 - 2020</div>
        </div>
      </div>
    </div>
  );
}
