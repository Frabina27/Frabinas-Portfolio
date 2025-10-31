import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Designs from "./pages/Designs";
import Resume from "./pages/Resume";
import ProjectDetails from "./pages/ProjectDetails";
import Eunoia from "./pages/Eunoia";
import MeteorMate from "./pages/MeteorMate";
import PersonalPortfolio from "./pages/PersonalPortfolio";
import ACMArchives from "./pages/ACMArchives";
import GDSC from "./pages/GDSC";


export default function App() {
  return (
    <>
      {/* Background gradient layer */}
      <div className="background"></div>

      <Router>
        <Navbar />
        <div className="container app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects/1" element={<Eunoia />} />
            <Route path="/projects/2" element={<MeteorMate />} />
            <Route path="/projects/3" element={<ACMArchives />} />
            <Route path="/projects/4" element={<GDSC />} />
            <Route path="/projects/5" element={<PersonalPortfolio />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
