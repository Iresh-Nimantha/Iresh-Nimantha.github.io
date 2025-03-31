import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import laravelIcon from "../../assets/laravel.png";
import mernIcon from "../../assets/mern.png";
import reactIcon from "../../assets/vite.svg";
import tailwindIcon from "../../assets/tailwindcss.png";
//import pythonIcon from "/src/assets/python.svg";
import wordpressIcon from "../../assets/wordpress.svg";
import bootstrapIcon from "../../assets/Bootstrap.svg";
import threeJsIcon from "../../assets/Threejs.svg";
import cIcon from "../../assets/CL.png";
import jsIcon from "../../assets/js.svg";
import phpIcon from "../../assets/php.svg";
import htmlIcon from "../../assets/HTML.svg";
import cssIcon from "../../assets/css.svg";
import { style } from "framer-motion/client";

// Note: Import your actual icons here
// These are just placeholders for the implementation
const skillsData = [
  // Full-Stack & Frameworks (High Priority)
  {
    name: "MERN Stack",
    icon: mernIcon,
    color: "#00D8FF",
    style: {
      borderRadius: "100%", // Rounded corners for a softer look
    },
  },
  {
    name: "Laravel",
    icon: laravelIcon,
    color: "#FF2D20",
  },
  {
    name: "React.js",
    icon: reactIcon,
    color: "#61DAFB",
  },

  // Backend & Server-Side Languages
  {
    name: "PHP",
    icon: phpIcon,
    color: "#777BB4",
  },
  {
    name: "Python",
    icon: "../../assets/python.svg",
    color: "#3776AB",
  },
  {
    name: "C",
    icon: cIcon,
    color: "#A8B9CC",
  },

  // Styling & UI Libraries
  {
    name: "Bootstrap CSS",
    icon: bootstrapIcon,
    color: "#7952B3",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
    color: "#38B2AC",
  },

  // Core Frontend Technologies
  {
    name: "JavaScript",
    icon: jsIcon,
    color: "#F7DF1E",
  },
  {
    name: "HTML",
    icon: htmlIcon,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: cssIcon,
    color: "#1572B6",
  },

  // Specialized & CMS
  {
    name: "Three.js",
    icon: threeJsIcon,
    color: "#000000",
  },
  {
    name: "WordPress",
    icon: wordpressIcon,
    color: "#21759B",
  },
];

const Skills = () => {
  // Use the intersection observer hook to trigger animations when section is in view
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Initialize animation controls
  const controls = useAnimation();

  // Start animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-6"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Technologies I've mastered during my development journey
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                },
              }}
              className="flex flex-col items-center"
            >
              {/* Icon Wrapper with Glowing Effect */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: `0 0 25px ${skill.color}40`,
                  transition: { duration: 0.3 },
                }}
                className="relative w-20 h-20 mb-4 rounded-2xl bg-gray-800 p-4 flex items-center justify-center shadow-lg border border-gray-700 overflow-hidden group"
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br"
                  style={{
                    background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`,
                  }}
                  whileHover={{ opacity: 0.2 }}
                />

                {/* The actual rotating icon */}
                <motion.div
                  whileHover={{
                    rotate: 360,
                    transition: {
                      duration: 3,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  {/* Placeholder for actual icons */}

                  <div>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10"
                      style={skill.style} // Apply inline styles properly
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Skill Name with Hover Animation */}
              <motion.span
                className="text-gray-300 text-sm font-medium text-center"
                whileHover={{
                  color: skill.color,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
