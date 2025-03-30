import React from "react";
import { Github, Linkedin, Copy } from "lucide-react";
import Swal from "sweetalert2"; // Import SweetAlert2

const FooterSection = () => {
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/Iresh-Nimantha",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ireshnimantha",
    },
  ];

  // Function to copy email to clipboard with SweetAlert2
  const copyToClipboard = () => {
    navigator.clipboard.writeText("ireshnimantha608@gmail.com").then(() => {
      // Show SweetAlert notification when email is copied
      Swal.fire({
        title: "Copied!",
        text: "Email has been copied to clipboard.",
        icon: "success",
        confirmButtonText: "Great!",
        background: "#252526",
        color: "#fff",
        confirmButtonColor: "#4CAF50",
      });
    });
  };

  return (
    <footer className="bg-[#252526] text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all transform hover:scale-110"
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>

        {/* Email Section with Copy Icon */}
        <div className="text-lg font-semibold text-gray-300">
          Reach me at{" "}
          <a
            href="https://mail.google.com/mail/u/0/#sent?compose=new&to=ireshnimantha608@gmail.com&su=Hello&body=I%20would%20like%20to%20connect!"
            target="_blank"
          >
            <span className="text-blue-400">ireshnimantha608@gmail.com</span>
          </a>
          <button
            onClick={copyToClipboard}
            className="text-blue-400 hover:text-blue-600 ml-2"
          >
            <Copy size={20} />
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          © 2025 Iresh Nimantha. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
