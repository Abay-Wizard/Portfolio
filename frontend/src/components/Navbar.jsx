import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu,setMenu] =useState('home')

  return (
    <nav className="sticky top-0 z-50 bg-white/50 dark:bg-gray-900/70 backdrop-blur-md text-gray-900 dark:text-gray-100 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          Abay Tessema
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 font-medium">
          <li onClick={()=>setMenu('home')} className={menu ==='home'? `text-purple-500`:''}>
            <Link
              to="/"

            >
              Home
            </Link>
          </li>
          <li onClick={()=>setMenu('about')} className={menu ==='about'? `text-purple-500`:''}>
            <Link
              to="/about"
              
            >
              About
            </Link>
          </li>
          <li onClick={()=>setMenu('contact')} className={menu ==='contact'? `text-purple-500`:''}>
            <Link
              to="/contact"
              
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="sm:hidden cursor-pointer text-gray-900 dark:text-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden bg-white/80 dark:bg-gray-800/90 border-t border-gray-300 dark:border-gray-700 backdrop-blur-md"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
