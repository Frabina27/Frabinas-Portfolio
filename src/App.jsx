import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Designs from "./pages/Designs";
import Resume from "./pages/Resume";

import Eunoia from "./pages/Eunoia";
import MeteorMate from "./pages/MeteorMate";
import ACMArchives from "./pages/ACMArchives";
import GDSC from "./pages/GDSC";

import Prodigy from "./pages/Prodigy";
import Weather from "./pages/Weather";
import Voice from "./pages/Voice";
import Pomodoro from "./pages/Pomodoro";
import Snake from "./pages/Snake";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        {}
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/designs" element={<PageWrapper><Designs /></PageWrapper>} />
        <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />

        {}
        <Route path="/projects/eunoia" element={<PageWrapper><Eunoia /></PageWrapper>} />
        <Route path="/projects/meteormate" element={<PageWrapper><MeteorMate /></PageWrapper>} />
        <Route path="/projects/acmarchives" element={<PageWrapper><ACMArchives /></PageWrapper>} />
        <Route path="/projects/gdsc" element={<PageWrapper><GDSC /></PageWrapper>} />

        {}
        <Route path="/projects/prodigy" element={<PageWrapper><Prodigy /></PageWrapper>} />
        <Route path="/projects/weather" element={<PageWrapper><Weather /></PageWrapper>} />
        <Route path="/projects/voice" element={<PageWrapper><Voice /></PageWrapper>} />
        {}
        <Route path="/projects/pomodoro" element={<PageWrapper><Pomodoro /></PageWrapper>} />
        <Route path="/projects/snake" element={<PageWrapper><Snake /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      {}
      <div className="background"></div>

      {}
      <Navbar />

      {}
      <div className="container app-content">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
