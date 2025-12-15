import React, { useEffect } from 'react'
import { blogStore } from '../store/blogStore'
import dateConverter from '../lib/dateConverter'
import { motion } from 'framer-motion'
import BlogsSkeleton from '../components/BlogsSkeleton'

const Blogs = () => {
  const { fetchBlogs, isFetchingBlogs, blogs } = blogStore()

  useEffect(() => {
    fetchBlogs()
  }, [])

  if (isFetchingBlogs) {
    return (
      <BlogsSkeleton/>
    )
  }

  return (
    <div className="px-4 py-10">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Blogs
      </h1>

      <div className="grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, boxShadow: "0px 18px 40px rgba(150,80,255,0.12)" }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 flex flex-col gap-4"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 wrap-break-word">
              {blog.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed wrap-break-word whitespace-normal">
              {blog.content}
            </p>

            {blog.images?.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mt-2">
                {blog.images.slice(0, 2).map((image, idx) => (
                  <div key={idx} className="w-full bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden flex items-center justify-center">
                    <img src={image} alt="Blog" className="max-h-40 w-auto object-contain" />
                  </div>
                ))}
              </div>
            )}

            <time className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Published: {dateConverter(blog.createdAt)}
            </time>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Blogs
