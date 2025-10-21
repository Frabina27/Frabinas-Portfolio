import React from "react";

export default function Resume(){
  return (
    <div>
      <h1>Resume</h1>
      <p className="small">My professional journey</p>
      <div className="card" style={{marginTop:12}}>
        <h3>Relevant Experience</h3>
        <div style={{display:'flex', justifyContent:'space-between', gap:12}}>
          <div style={{flex:1}}>
            <h4>UI/UX Designer & Frontend Developer</h4>
            <div className="small">ROLE</div>
            <p className="small">WHAT DID I DO</p>
          </div>
          <div className="small" style={{minWidth:100, textAlign:'right'}}>2019 - 2020</div>
        </div>

        <div style={{display:'flex', justifyContent:'space-between', gap:12}}>
          <div style={{flex:1}}>
            <h4>UI/UX Designer & Frontend Developer</h4>
            <div className="small">ROLE</div>
            <p className="small">WHAT DID I DO</p>
          </div>
          <div className="small" style={{minWidth:100, textAlign:'right'}}>2019 - 2020</div>
        </div>
      </div>
    </div>
  );
}
