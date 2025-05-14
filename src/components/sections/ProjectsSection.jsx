import React, { useState, useEffect } from "react";
import {
  fullStackProjects,
  frontEndProjects,
  wordpressProjects,
} from "../portfolioData";
import { Github, ExternalLink, Code, Eye, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("fullstack");
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get category-specific styling
  const categoryConfig = {
    fullstack: {
      color: "indigo",
      label: "Full Stack",
      icon: "🧰",
    },
    frontend: {
      color: "blue",
      label: "Frontend",
      icon: "🎨",
    },
    wordpress: {
      color: "emerald",
      label: "WordPress",
      icon: "📝",
    },
  };

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

  // Update visible projects when category changes
  useEffect(() => {
    setVisibleProjects(getProjectsByCategory());
  }, [activeCategory]);

  // Handle project click to show modal
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Get background gradient based on category
  const getCategoryGradient = () => {
    const color = categoryConfig[activeCategory].color;
    return `bg-gradient-to-r from-${color}-600 to-${color}-800`;
  };

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated border */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-950 px-6 text-4xl font-bold text-white">
              Projects
            </span>
          </div>
        </div>

        {/* Category Selection */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {Object.keys(categoryConfig).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                relative px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? `bg-${categoryConfig[category].color}-600 text-white shadow-lg shadow-${categoryConfig[category].color}-500/30`
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }
              `}
            >
              <span className="flex items-center gap-2">
                <span>{categoryConfig[category].icon}</span>
                <span>{categoryConfig[category].label}</span>
              </span>
              {activeCategory === category && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white"></span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gray-800/50 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Media */}
              <div className="relative h-48 overflow-hidden">
                <video
                  src={project.texture}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => e.target.pause()}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>

                {/* Tags overlay */}
                <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end">
                  {project.tags.slice(0, 3).map((tag) => (
                    <div
                      key={tag.id}
                      className="bg-black bg-opacity-70 rounded-md px-2 py-1"
                    >
                      <img src={tag.path} alt={tag.name} className="w-4 h-4" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                  {project.title}
                  <span
                    className={`text-${categoryConfig[activeCategory].color}-500`}
                  >
                    <ArrowRight
                      size={20}
                      className="transform transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {project.desc}
                </p>

                {/* Quick Actions */}
                <div className="flex space-x-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`p-2 rounded-lg bg-${categoryConfig[activeCategory].color}-600 bg-opacity-20 hover:bg-opacity-40 text-${categoryConfig[activeCategory].color}-500 transition`}
                  >
                    <Github size={18} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-white z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Project Hero */}
            <div className="relative h-64 md:h-80">
              <video
                src={selectedProject.texture}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>

              {/* Project title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>

                  <div className="flex space-x-3">
                    <a
                      href={selectedProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg bg-${categoryConfig[activeCategory].color}-600`}
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-800"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="mb-6">
                <p className="text-gray-200 mb-4">{selectedProject.desc}</p>
                {selectedProject.subdesc && (
                  <p className="text-gray-400">{selectedProject.subdesc}</p>
                )}
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-white font-medium mb-4 text-lg">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <div
                      key={tag.id}
                      className={`flex items-center bg-gray-800 px-3 py-2 rounded-md border border-gray-700`}
                    >
                      <img
                        src={tag.path}
                        alt={tag.name}
                        className="w-5 h-5 mr-2"
                      />
                      <span className="text-gray-200">{tag.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-lg flex items-center space-x-2 bg-${categoryConfig[activeCategory].color}-600 text-white font-medium`}
                >
                  <Code size={18} />
                  <span>View Source Code</span>
                </a>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-medium"
                  >
                    <Eye size={18} />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
