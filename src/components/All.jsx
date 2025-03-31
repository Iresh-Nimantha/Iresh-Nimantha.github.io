// All.jsx
import React, { useEffect } from "react";
import NavBar from "./sections/NavBar";
import HeroSection from "./sections/HeroSection";
import AboutMeSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import Contact from "./sections/Contact";
import FooterSection from "./sections/FooterSection";

function All() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove '/all' from the beginning of the hash
      const cleanedHash = hash.replace('/all#', '');

      // Extract the section ID (e.g., 'skills', 'about', 'contact')
      const sectionId = cleanedHash.split("#")[1]; // Split the cleaned hash at '#' and get the second part

      if (sectionId) {
        const element = document.querySelector(`#${sectionId}`); // Use '#' to target the id
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <FooterSection />
    </div>
  );
}

export default All;
