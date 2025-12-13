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
    <section className="relative w-full overflow-hidden bg-linear-to-b from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24 px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-300/20 dark:bg-purple-900/20 rounded-full blur-3xl" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-16 tracking-tight"
      >
        My <span className="text-purple-600">Skills</span>
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {skill.name}
              </p>
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                {skill.level}%
              </span>
            </div>

            <div className="relative w-full h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute left-0 top-0 h-full bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 rounded-full"
              />
            </div>

            <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-500/10 dark:ring-purple-400/10 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
