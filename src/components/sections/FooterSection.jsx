import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Copy,
  Mail,
  Check,
  ExternalLink,
} from "lucide-react";

function Footer() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [copied, setCopied] = useState(false);

  const email = "ireshnimantha608@gmail.com";

  const socialLinks = [
    { name: "github", icon: Github, url: "https://github.com/Iresh-Nimantha" },
    {
      name: "linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ireshnimantha",
    },
    {
      name: "instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ireshnimantha/",
    },
    {
      name: "email",
      icon: Mail,
      url: `mailto:${email}`,
    },
  ];

  const handleIconEnter = (index) => {
    setActiveIcon(index);
  };

  const handleIconLeave = () => {
    setActiveIcon(null);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);

      // Check if Swal is defined (SweetAlert2)
      if (typeof Swal !== "undefined") {
        Swal.fire({
          title: "Copied!",
          text: "Email has been copied to clipboard.",
          icon: "success",
          confirmButtonText: "Great!",
          background: "#252526",
          color: "#fff",
          confirmButtonColor: "#4CAF50",
        });
      }
    });
  };

  return (
    <footer className="py-6 border-t border-gray-700 bg-gray-900 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Left - Privacy Policy (Mobile: top) */}
          <div className="group order-1 md:order-1">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span>Privacy Policy</span>
              <ExternalLink
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* Center - Social Links + Email Copy (Mobile: middle) */}
          <div className="flex flex-col items-center gap-4 order-3 md:order-2">
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  onMouseEnter={() => handleIconEnter(index)}
                  onMouseLeave={handleIconLeave}
                >
                  <div
                    className={`p-2 rounded-full transition-all duration-300 ${
                      activeIcon === index ? "bg-gray-700" : "hover:bg-gray-800"
                    }`}
                  >
                    <link.icon
                      size={20}
                      className="text-gray-400 group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {activeIcon === index && (
                    <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-md">
                      {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                    </div>
                  )}
                </a>
              ))}
            </div>

            {/* Email Section with Copy Icon */}
            <div className="text-sm md:text-base lg:text-lg font-semibold text-gray-300 flex flex-wrap items-center justify-center gap-2">
              <span>Reach me at</span>
              <a
                href={`mailto:${email}?subject=Hello&body=I%20would%20like%20to%20connect!`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {email}
              </a>
              <button
                onClick={copyToClipboard}
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check size={18} className="text-green-400" />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Right - Copyright (Mobile: bottom) */}
          <p className="text-gray-400 text-sm order-2 md:order-3">
            © {new Date().getFullYear()} Iresh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
