import React from "react";

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
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Section Header */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="w-full space-y-2">
            {/* Skill Label and Percentage */}
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
