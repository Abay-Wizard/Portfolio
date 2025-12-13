import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HomePro from "../assets/HomePro.jpg";


const TypingTextLoop = ({ text, speed = 120, pause = 1500, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === text.length) setTimeout(() => setIsDeleting(true), pause);
      } else {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
        if (index === 0) setIsDeleting(false);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, pause]);

  return <span className={className}>{displayedText}</span>;
};

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 py-16 md:py-24 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left flex-1"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            Abay M. Tessema
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-purple-600 font-semibold h-[38px] overflow-hidden mb-6">
            <TypingTextLoop
              text="Software Developer"
              speed={120}
              pause={1800}
              className="tracking-wide"
            />
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
            I’m a result-driven full-stack developer passionate about crafting scalable,
            efficient, and elegant web solutions. With experience in REST APIs,
            real-time apps, and secure integrations — I focus on turning complex
            challenges into smooth, user-friendly experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/about"
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 transition"
              >
                Learn more
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center flex-1"
        >
          <img
            src={HomePro}
            alt="Abay M. Tessema"
            className="rounded-3xl w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 object-cover shadow-xl border-4 border-purple-300 dark:border-purple-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
