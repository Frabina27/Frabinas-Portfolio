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
import PersonalPortfolio from "./pages/PersonalPortfolio";
import ACMArchives from "./pages/ACMArchives";
import GDSC from "./pages/GDSC";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}   
    animate={{ opacity: 1, y: 0 }}    
    exit={{ opacity: 0, y: -40 }} 
    transition={{ duration: 0.2, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/designs" element={<PageWrapper><Designs /></PageWrapper>} />
        <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
        <Route path="/projects/1" element={<PageWrapper><Eunoia /></PageWrapper>} />
        <Route path="/projects/2" element={<PageWrapper><MeteorMate /></PageWrapper>} />
        <Route path="/projects/3" element={<PageWrapper><ACMArchives /></PageWrapper>} />
        <Route path="/projects/4" element={<PageWrapper><GDSC /></PageWrapper>} />
        <Route path="/projects/5" element={<PageWrapper><PersonalPortfolio /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <div className="background"></div>

      <Router>
        <Navbar />
        <div className="container app-content">
          <AnimatedRoutes />
        </div>
      </Router>
    </>
  );
}
