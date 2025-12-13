import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section className="px-4 py-16 bg-white dark:bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-14"
      >
        My <span className="text-purple-600">Education</span>
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-3xl shadow-lg">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f064fad5065bf4b98603cbe/1594253109622-HSEBFOZJG2YUW2JW374B/ALU%2Blogos-01.jpg"
              alt="African Leadership University"
              className="w-72 md:w-96 object-contain"
            />
          </div>
        </div>

        <div>

          <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">
            African Leadership University
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
            I am a Software Engineering student with an
            intent to specialize in Machine Learning.
            At African Leadership University, I am building a strong foundation in modern
            computer science and real-world software development.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {[
              'Web Development',
              'Data Structures & Algorithms',
              'System Design',
              'Cloud Computing',
              'Object-Oriented Programming',
              'Statistics & Probability'
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-center"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 w-fit">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Expected Graduation
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              December 2028
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education
