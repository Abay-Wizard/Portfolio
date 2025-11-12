import React from "react";
import portfolioPic from "../assets/portfolioPic.jpg";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-6 md:p-12">
      
      {/* Profile Image */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 md:mb-0 md:mr-12 shrink-0">
        {/* Blurred Glow Background */}
        <div
          className="absolute inset-0 rounded-full bg-cover bg-center filter blur-xl opacity-60"
          style={{ backgroundImage: `url(${portfolioPic})` }}
        ></div>

        {/* Main Image */}
        <img
          className="relative rounded-full w-full h-full object-cover border-4 border-purple-500 shadow-lg shadow-purple-300/30"
          src={portfolioPic}
          alt="Abay Tessema"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Who Am I?
        </h1>

        {/* Poem */}
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 whitespace-pre-line">
{`I am not born to drift like leaves in air,
Nor beast of hunger, chasing what is near;
Within my heart, a quiet flame declares—
The soul was made for knowing, not for fear.

To live is more than breathing, more than days;
It is to seek the why beneath the sky,
To turn each wound into a wiser gaze,
And let my striving teach my spirit to fly.`}
        </p>

        {/* Technical Summary */}
        <div className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 shadow-md shadow-purple-500/10">
          <h2 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
            The Developer Behind the Lines
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a full-stack developer passionate about building accessible, human-centered digital experiences.
            From crafting intuitive UIs in <span className="font-medium text-purple-600 dark:text-purple-400">React</span> to building robust APIs with <span className="font-medium text-purple-600 dark:text-purple-400">Node.js</span> and <span className="font-medium text-purple-600 dark:text-purple-400">Express</span>, 
            I blend creativity with logic to make technology more inclusive and empowering for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
