// All.jsx (Simplified for debugging)
import React, { useEffect, useRef } from "react";
import NavBar from "./sections/NavBar";
// import HeroSection from "./sections/HeroSection";
// import AboutMeSection from "./sections/AboutSection";
// import SkillsSection from "./sections/SkillsSection";
// import ProjectsSection from "./sections/ProjectsSection";
// import Contact from "./sections/Contact";
// import FooterSection from "./sections/FooterSection";

function All() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div>
      <NavBar />
      {/* <HeroSection /> */}
      {/* <AboutMeSection /> */}
      {/* <SkillsSection /> */}
      {/* <ProjectsSection /> */}
      {/* <Contact /> */}
      {/* <FooterSection /> */}
      <h1>All Component Loaded</h1>
    </div>
  );
}

export default All;
