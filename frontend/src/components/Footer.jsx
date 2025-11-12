import React from "react";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 border-t border-purple-700/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left - Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-semibold text-white tracking-wide"
        >
          Abay Tessema
        </motion.h1>

        {/* Center - Social Icons */}
        <div className="flex space-x-6">
          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/abay-tessema-8453b328b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <Linkedin size={26} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Abay-Wizard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Github size={26} />
          </motion.a>
        </div>

        {/* Right - Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-400"
        >
          © {new Date().getFullYear()} Abay Tessema. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
