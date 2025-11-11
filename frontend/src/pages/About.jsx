import React from 'react';
import portfolioPic from '../assets/portfolioPic.jpg';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 md:p-12">
      
      {/* Image Section */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 md:mb-0 md:mr-12 shrink-0">
        {/* Blurred background */}
        <div
          className="absolute inset-0 rounded-full bg-cover bg-center filter blur-lg"
          style={{ backgroundImage: `url(${portfolioPic})` }}
        ></div>
        {/* Main profile image */}
        <img
          className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
          src={portfolioPic}
          alt="Abay"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Who Am I?</h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line">
          {`I am not born to drift like leaves in air,
Nor beast of hunger, chasing what is near;
Within my heart, a quiet flame declares—
The soul was made for knowing, not for fear.

Aristotle whispered through the years of dust,
That virtue blooms between the wild extremes;
Not bound by impulse, nor by hollow trust,
But shaped through will, and strengthened by my dreams.

To live is more than breathing, more than days;
It is to seek the why beneath the sky,
To turn each wound into a wiser gaze,
And let my striving teach my spirit to fly.

So measure me not by wealth, or fleeting fame,
But by the good my spirit dares to claim.`}
        </p>
      </div>
    </div>
  );
};

export default About;
