import React from "react";

export default function ProjectCard({title, subtitle, tags}) {
  return (
    <div className="card card-hover">
      <div style={{height:120, borderRadius:10, background:'linear-gradient(135deg, rgba(168,216,255,0.08), rgba(10,30,60,0.04))'}} />
      <div style={{paddingTop:12}}>
        <div className="row" style={{justifyContent:'space-between'}}>
          <h3>{title}</h3>
          <div className="small">{tags?.join(' • ')}</div>
        </div>
        <p className="small" style={{marginTop:8}}>{subtitle}</p>
        <div style={{marginTop:12}}>
          <a className="btn" href="#">{'View Project'}</a>
        </div>
      </div>
    </div>
  );
}
