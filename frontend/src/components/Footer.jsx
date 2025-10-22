import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Name */}
        <h1 className="text-2xl font-semibold text-white mb-4 md:mb-0">
          Abay Tessema
        </h1>

        {/* Center - Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/abay-tessema-8453b328b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <Linkedin size={26} />
          </a>
          <a
            href="https://github.com/Abay-Wizard"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition duration-300"
          >
            <Github size={26} />
          </a>
        </div>

        {/* Right side - Copyright */}
        <p className="text-sm text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} Abay Tessema. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
