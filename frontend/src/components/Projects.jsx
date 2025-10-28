import React from "react";
import goShopNew from "../assets/goShopNew.png";
import NileChat from "../assets/NileChat.png";
import GlobalBites from "../assets/GlobalBites.png";
import { Github } from "lucide-react";

const Projects = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 pt-16 px-6 md:px-16 pb-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* GoShop */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105">
          <img
            className="w-full h-48 object-cover"
            src={goShopNew}
            alt="GoShop"
          />
          <div className="p-6 flex flex-col flex-1">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              GoShop is an e-commerce site where the people can do shopping using just their devices.
              This project enhanced my understanding of backend logics like payment integration, order tracking,
              and database management.
            </p>
            <div className="flex items-center justify-between gap-3">
              <a
                href="https://e-commerce-project-eight-liart.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition"
              >
                Demo ↗
              </a>
              <a
                href="https://github.com/Abay-Wizard/e-commerce-project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                Code
              </a>
            </div>
          </div>
        </div>

        {/* NileChat */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105">
          <img
            className="w-full h-48 object-cover"
            src={NileChat}
            alt="NileChat"
          />
          <div className="p-6 flex flex-col flex-1">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              NileChat is a realtime chatting/communication app. I built it using Node.js,
              Express.js, React.js, MongoDB and Socket.io. The project helped me understand realtime events,
              and how to handle them using Socket.io.
            </p>
            <div className="flex items-center justify-between gap-3">
              <a
                href="https://real-time-chat-app-fawn-two.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition"
              >
                Demo ↗
              </a>
              <a
                href="https://github.com/Abay-Wizard/Real-time-chat-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                Code
              </a>
            </div>
          </div>
        </div>

        {/* GlobalBites */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105">
          <img
            className="w-full h-48 object-cover"
            src={GlobalBites}
            alt="GlobalBites"
          />
          <div className="p-6 flex flex-col flex-1">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              GlobalBites is an online food order and delivery system. Most Restaurants in Kigali don't have
              this kind of websites and that's what inspired me to build GlobalBites.
            </p>
            <div className="flex items-center justify-between gap-3">
              <a
                href="https://fooddeliveryapp-two.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition"
              >
                Demo ↗
              </a>
              <a
                href="https://github.com/Abay-Wizard/Food-delivery-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
