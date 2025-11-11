import React from "react";
import "../css/Designs.css";

// ✅ All six main magazine pages now live in the ACMno folder
import Page1 from "../images/ACMno/ACM_Page1.png";
import Page2 from "../images/ACMno/ACM_Page2.png";
import Page3 from "../images/ACMno/ACM_Page3.png";
import Page4 from "../images/ACMno/ACM_Page4.png";
import Page5 from "../images/ACMno/ACM_Page5.png";
import Page6 from "../images/ACMno/ACM_Page6.png";
import ACMno1 from "../images/ACMno/ACMno1.png";
import ACMno2 from "../images/ACMno/ACMno2.png";
import ACMno3 from "../images/ACMno/ACMno3.png";
import ACMno4 from "../images/ACMno/ACMno4.png";
import ACMno5 from "../images/ACMno/ACMno5.png";
import ACMno6 from "../images/ACMno/ACMno6.png";
import ACMno7 from "../images/ACMno/ACMno7.png";
import ACMno8 from "../images/ACMno/ACMno8.png";
import ACMno9 from "../images/ACMno/ACMno9.png";
import ACMno10 from "../images/ACMno/ACMno10.png";
import ACMno11 from "../images/ACMno/ACMno11.png";
import ACMno12 from "../images/ACMno/ACMno12.png";
import ACMno13 from "../images/ACMno/ACMno13.png";
import ACMno14 from "../images/ACMno/ACMno14.png";


export default function ACMArchives() {
  return (
    <div className="project-page container">
      {/* Project Title */}
      <h1>ACM Archives - Magazine Design</h1>

      {/* Project Description */}
      <p className="project-description">
        Designed pages for the ACM student magazine using Canva. 
        Focused on visually appealing layouts that communicate content clearly while maintaining a professional aesthetic.
      </p>

      {/* Featured Pages */}
      <section className="project-section">
        <h2>Magazine Pages</h2>

        <div className="iteration-images">
  <div className="info-card">
    <p><strong>October Page:</strong> The October Page highlights ACM’s biggest events of the month through a clean, technical layout inspired by retro pop-up windows. Each event is showcased within stylized frames featuring pixel cursors, ACM branding, and technical icons. This design captures the spirit of innovation while maintaining a nostalgic, early-internet charm that reflects ACM’s creative culture. </p>
    <img src={Page1} alt="ACM DESIGN" style={{ width: "45%", margin: "12px 0" }} />
  </div>

  <div className="info-card">
    <p><strong>November Page:</strong> For the November Page, I leaned fully into a Y2K-inspired aesthetic, featuring metallic silvers, a CD disk graphic, and playful nods to the classic Paint interface. This layout draws attention to ACM’s top November events with a futuristic yet nostalgic twist, blending professionalism with fun, tech-inspired visuals that stand out on the page.</p>
    <img src={Page2} alt="ACM DESIGN" style={{ width: "45%", margin: "12px 0" }} />
  </div>

  <div className="info-card">
    <p><strong>ACM Archives:</strong> The Archives Page celebrates the team behind the magazine, inspired by the look of a vintage high school yearbook with a modern, “cool girl” twist. It blends candid team photos, playful typography, and confident design details to give the section a lively, personality-driven finish that honors the creativity behind ACM’s publications.</p>
    <img src={Page3} alt="ACM DESIGN" style={{ width: "45%", margin: "12px 0" }} />
  </div>

    <div className="info-card">
    <p><strong>Mentors & Tech Prep Team:</strong> This highlights the people behind the events! The ones who plan, guide, and make each initiative possible. I used this green to reinforce the organization’s branding and energy, while designing the layout around polaroid-style frames to give it a more personal, human touch. Rather than focusing solely on the events, this page celebrates the faces and stories behind them, blending professional consistency with a warm, approachable design aesthetic.</p>
    <img src={Page4} alt="ACM DESIGN" style={{ width: "45%", margin: "12px 0", marginRight: "4%" }} />
    <img src={Page5} alt="ACM DESIGN" style={{ width: "45%", margin: "12px 0" }} />

  </div>

  <div className="info-card">
    <p><strong>The one's that didnt make it:</strong> Here are some more designs during the first phase of iteration that I created for fun!</p>
    <img src={ACMno1} alt="ACM DESIGN 1" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno2} alt="ACM DESIGN 2" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno3} alt="ACM DESIGN 3" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno4} alt="ACM DESIGN 4" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno5} alt="ACM DESIGN 5" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno6} alt="ACM DESIGN 6" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno7} alt="ACM DESIGN 7" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno8} alt="ACM DESIGN 8" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno9} alt="ACM DESIGN 9" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno10} alt="ACM DESIGN 10" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno11} alt="ACM DESIGN 11" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno12} alt="ACM DESIGN 12" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno13} alt="ACM DESIGN 13" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />
    <img src={ACMno14} alt="ACM DESIGN 14" style={{ width: "20%", margin: "12px 0", marginRight: "4%" }} />  </div>
</div>
      </section>
    </div>
  );
}
