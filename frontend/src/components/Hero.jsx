import React, { useState, useEffect } from "react";
import portfolioPic from "../assets/portfolioPic.jpg";

const TypingTextLoop = ({ text, speed = 120, pause = 1500, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
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
    <section className="flex flex-col md:flex-row items-center gap-10 w-full mx-auto px-8 md:px-50 py-16 bg-purple-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Left Side */}
      <div className="flex flex-col items-center md:items-start gap-6 md:flex-1">
        <img
          className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover shadow-lg border-4 border-purple-300"
          src={portfolioPic}
          alt="Abay M. Tessema"
        />

        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Abay M. Tessema
          </h1>
          <h2 className="text-xl md:text-2xl text-purple-600 font-semibold mt-1 h-[35px] overflow-hidden">
            <TypingTextLoop
              text="Software Developer"
              speed={120}
              pause={1800}
              className="tracking-wide"
            />
          </h2>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:flex-1 mt-8 md:mt-0">
        <p className="text-gray-800 dark:text-gray-300 text-base md:text-lg leading-relaxed md:leading-loose max-w-xl text-justify md:text-left">
          I’m a result-driven full-stack software developer with over a year
          of hands-on experience building scalable REST APIs, real-time chat
          applications, and secure payment integrations. I focus on delivering
          elegant, efficient, and reliable end-to-end solutions that combine
          functionality with beautiful design.
        </p>
      </div>
    </section>
  );
};

export default Hero;
