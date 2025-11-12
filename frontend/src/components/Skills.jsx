import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 80 },
  { name: "Python", level: 65 },
  { name: "JavaScript", level: 75 },
  { name: "Node.js", level: 65 },
  { name: "React.js", level: 75 },
  { name: "Express.js", level: 70 },
  { name: "MongoDB", level: 70 },
  { name: "Vercel", level: 70 },
  { name: "Render", level: 65 },
  { name: "GitHub", level: 80 },
  { name: "Git", level: 55 },
];

const Skills = () => {
  return (
    <section className="relative w-full bg-linear-to-b from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-20 px-6">
      {/* Section Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-14"
      >
        My <span className="text-purple-600">Skills</span>
      </motion.h1>

      {/* Skills Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Skill Label and Percentage */}
            <div className="flex justify-between items-center mb-3">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {skill.name}
              </p>
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-linear-to-r from-purple-500 to-purple-700 h-3 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
