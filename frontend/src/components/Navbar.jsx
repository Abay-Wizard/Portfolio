import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user=localStorage.getItem('user')
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Hire Me", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
    { name: "Books", path: "/books" },
    { name: "Admin", path: user ? "/admin" :"/admin/login"}
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold tracking-tight text-purple-600 dark:text-purple-400 cursor-pointer"
        >
          <Link to="/">Abay Tessema</Link>
        </motion.h1>

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

        <button
          className="sm:hidden text-gray-900 dark:text-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-full w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 shadow-lg sm:hidden"
            >
              <ul className="flex flex-col py-4 space-y-4 text-center font-medium text-gray-800 dark:text-gray-200">
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
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
