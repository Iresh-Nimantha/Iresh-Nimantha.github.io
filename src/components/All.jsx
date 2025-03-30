import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutMeSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";

import FooterSection from "./sections/FooterSection";
import NavBar from "./sections/NavBar";
import Contact from "./sections/Contact";

function All() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />

      <Contact />
      <FooterSection />
    </>
  );
}

export default All;
