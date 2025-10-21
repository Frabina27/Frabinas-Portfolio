import React from "react";

export default function Home(){
  return (
    <div>
      <section style={{display:'grid', gridTemplateColumns:'1fr 360px', gap:28, alignItems:'start'}}>
        <div>
          <h1 style={{fontSize:48, lineHeight:1.02}}>Creative <span style={{color:'#a8d8ff'}}>Designer</span> & Developer</h1>
          <p style={{color:'rgba(230,238,248,0.9)', fontSize:18}}>Crafting beautiful, accessible user interfaces with clean front-end code. Aspiring software developer passionate about user interfaces.</p>
          <div style={{marginTop:18, display:'flex', gap:12}}>
            <a className="btn" href="/projects">View Projects</a>
            <a className="btn" href="/resume">View Resume</a>
          </div>
        </div>
        <aside className="card">
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
            <div style={{width:120,height:120,borderRadius:999, display:'flex',alignItems:'center',justifyContent:'center', fontSize:48, background:'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'}}>👋</div>
            <h2 style={{marginTop:8}}>Hello, I'm Frabina</h2>
            <p className="small">Aspiring Software Developer - Passionate about user interfaces</p>
            <div style={{marginTop:12, display:'flex', gap:10}}>
              <div className="card" style={{padding:'12px 16px', textAlign:'center'}}>5+<div className="small">Years</div></div>
              <div className="card" style={{padding:'12px 16px', textAlign:'center'}}>20+<div className="small">Projects</div></div>
            </div>
          </div>
        </aside>
      </section>

      <section style={{marginTop:28}}>
        <h3>About Me</h3>
        <div className="card" style={{marginTop:12}}>
          <p>Hello! I’m <strong>Frabina!</strong>, an aspiring software developer currently studying Computer Science at The University of Texas at Dallas. I love designing thoughtful user interfaces and building clean, maintainable front-end! I’ve contributed to student organizations, worked with children, and mentored other students through their college year. My goal is to blend strong engineering with accessible, human-centered design to create!</p>
        </div>
      </section>

      <section style={{marginTop:28}}>
        <h3>Languages</h3>
        <div className="card" style={{marginTop:12}}>
          <p> <strong>Languages:</strong> C++, Java, Python, HTML, CSS, JS, UNIX</p>
        </div>
      </section>
    </div>
  );
}
