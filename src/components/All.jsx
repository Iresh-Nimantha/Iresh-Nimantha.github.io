import React from "react";
import HeroSectionAll from "./sections/HeroSection";
import AboutMeSectionAll from "./sections/AboutSection";
import SkillsSectionAll from "./sections/SkillsSection";
import ProjectsSectionAll from "./sections/ProjectsSection";

import FooterSectionAll from "./sections/FooterSection";
import NavBarAll from "./sections/NavBar";
import ContactAll from "./sections/Contact";

function All() {
  return (
    <>
      <NavBarAll />
      <HeroSectionAll />
      <AboutMeSectionAll />
      <SkillsSectionAll />
      <ProjectsSectionAll />

      <ContactAll />
      <FooterSectionAll />
    </>
  );
}

export default All;
