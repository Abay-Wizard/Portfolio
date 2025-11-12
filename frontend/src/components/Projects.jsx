import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import goShopNew from "../assets/goShopNew.png";
import NileChat from "../assets/NileChat.png";
import GlobalBites from "../assets/GlobalBites.png";

const projects = [
  {
    title: "GoShop",
    image: goShopNew,
    description:
      "GoShop is an e-commerce site that lets users shop easily from their devices. I built this to explore backend systems like payment integration, order tracking, and database management.",
    demo: "https://e-commerce-project-eight-liart.vercel.app",
    code: "https://github.com/Abay-Wizard/e-commerce-project",
  },
  {
    title: "NileChat",
    image: NileChat,
    description:
      "NileChat is a real-time chat application built with Node.js, Express, React, MongoDB, and Socket.io. It deepened my understanding of real-time communication and event handling.",
    demo: "https://real-time-chat-app-fawn-two.vercel.app",
    code: "https://github.com/Abay-Wizard/Real-time-chat-app",
  },
  {
    title: "GlobalBites",
    image: GlobalBites,
    description:
      "GlobalBites is an online food ordering and delivery platform inspired by the lack of digital systems in local restaurants. It focuses on smooth UI, efficient ordering, and responsive design.",
    demo: "https://fooddeliveryapp-two.vercel.app",
    code: "https://github.com/Abay-Wizard/Food-delivery-app",
  },
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6 md:px-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-14"
      >
        My <span className="text-purple-600">Projects</span>
      </motion.h1>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-700 transition"
                >
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-900 transition"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </div>

            {/* Description */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
