import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projectStore } from "../store/projectStore";
import ProjectsSkeleton from "./ProjectsSkeleton";

const Projects = () => {
  const { fetchProjects, isFetchingProjects, projects } = projectStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  if (isFetchingProjects) {
    return <ProjectsSkeleton />;
  }

  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-14"
      >
        My <span className="text-purple-600">Projects</span>
      </motion.h1>

      <div className="grid grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.article
            key={project._id || index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-md hover:shadow-xl hover:bg-purple-50 transition-all"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={project.coverImage}
                alt={project.projectName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-black transition"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>

            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {project.projectName}
              </h2>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
