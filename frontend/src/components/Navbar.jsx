import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold tracking-tight text-purple-600 dark:text-purple-400 cursor-pointer"
        >
          <Link to="/">Abay Tessema</Link>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-8 font-medium text-gray-800 dark:text-gray-200">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.li key={link.name} whileHover={{ scale: 1.1 }}>
                <Link
                  to={link.path}
                  className={`relative transition duration-300 ${
                    isActive
                      ? "text-purple-600 dark:text-purple-400"
                      : "hover:text-purple-500"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-600 dark:bg-purple-400 rounded-full"
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-gray-900 dark:text-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`sm:hidden overflow-hidden bg-white/90 dark:bg-gray-800/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-800 dark:text-gray-200">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`transition duration-300 ${
                location.pathname === link.path
                  ? "text-purple-600 dark:text-purple-400 font-semibold"
                  : "hover:text-purple-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
