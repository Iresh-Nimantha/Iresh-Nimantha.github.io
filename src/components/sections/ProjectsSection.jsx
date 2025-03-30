import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  fullStackProjects,
  frontEndProjects,
  wordpressProjects,
} from "../portfolioData";
import { Github } from "lucide-react"; // Assuming you're using lucide-react for icons

const ProjectsSection = () => {
  // Add state for active category
  const [activeCategory, setActiveCategory] = useState("fullstack");
  const [activeProject, setActiveProject] = useState(fullStackProjects[0]);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get projects based on active category
  const getProjectsByCategory = () => {
    switch (activeCategory) {
      case "fullstack":
        return fullStackProjects;
      case "frontend":
        return frontEndProjects;
      case "wordpress":
        return wordpressProjects;
      default:
        return fullStackProjects;
    }
  };

  // Update active project when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const categoryProjects =
      category === "fullstack"
        ? fullStackProjects
        : category === "frontend"
        ? frontEndProjects
        : wordpressProjects;

    setActiveProject(categoryProjects[0]);
  };

  const currentProjects = getProjectsByCategory();

  return (
    <section id="projects" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of web development projects showcasing diverse
            technologies and solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-800 rounded-lg p-1">
            <button
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeCategory === "fullstack"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => handleCategoryChange("fullstack")}
            >
              Fullstack
            </button>
            <button
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeCategory === "frontend"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => handleCategoryChange("frontend")}
            >
              Frontend
            </button>
            <button
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeCategory === "wordpress"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => handleCategoryChange("wordpress")}
            >
              WordPress
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {currentProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeProject.id === project.id &&
                    activeProject.title === project.title
                      ? "bg-slate-800 shadow-lg"
                      : "bg-slate-800/50 hover:bg-slate-800/80"
                  }`}
                  onClick={() => setActiveProject(project)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden"
                      style={project.logoStyle}
                    >
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm truncate max-w-xs">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {activeProject && (
              <motion.div
                key={`${activeCategory}-${activeProject.id}-${activeProject.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800 rounded-xl overflow-hidden shadow-xl relative"
              >
                <div className="relative aspect-video w-full overflow-hidden group">
                  <video
                    src={activeProject.texture}
                    alt={activeProject.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={activeProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg flex items-center space-x-2"
                    >
                      <Github size={24} />
                      <span>Go to Project</span>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {activeProject.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">{activeProject.desc}</p>
                  <p className="text-gray-400 text-sm mb-6">
                    {activeProject.subdesc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {activeProject.tags.map((tag) => (
                      <div
                        key={tag.id}
                        className="flex items-center bg-slate-700 px-3 py-1 rounded-full"
                      >
                        <img
                          src={tag.path}
                          alt={tag.name}
                          className="w-4 h-4 mr-2"
                        />
                        <span className="text-sm text-gray-200">
                          {tag.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
