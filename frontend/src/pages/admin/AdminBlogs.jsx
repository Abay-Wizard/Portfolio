import React, { useEffect } from 'react'
import { Edit, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { blogStore } from '../../store/blogStore'
import dateConverter from '../../lib/dateConverter'

const AdminBlogs = () => {
  const { fetchBlogs, isFetchingBlogs, blogs, deleteBlog } = blogStore()
  const navigate = useNavigate()

  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id)
    } catch (error) {
      console.log(error)
    }
  }

  if (isFetchingBlogs) {
    return (
      <h1 className="text-purple-500 text-4xl font-bold text-center py-20">
        Loading blogs...
      </h1>
    )
  }

  return (
    <div className="px-4 py-10">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-5 flex flex-col"
          >
            <div className="flex justify-end gap-3 mb-3">
              <button
                onClick={() => navigate(`/admin/blogs/update/${blog._id}`)}
                className="p-2 rounded-lg bg-purple-100 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              >
                <Edit className="text-purple-600" />
              </button>

              <button
                onClick={() => handleDelete(blog._id)}
                className="p-2 rounded-lg bg-red-100 hover:bg-red-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              >
                <Trash2 className="text-red-600" />
              </button>
            </div>

            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 wrap-break-word">
              {blog.title}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm leading-relaxed wrap-break-word line-clamp-4">
              {blog.content}
            </p>

            {blog.images?.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mt-4">
                {blog.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt="Blog"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                ))}
              </div>
            )}

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              Published: {dateConverter(blog.createdAt)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminBlogs
