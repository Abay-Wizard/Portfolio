import React, { useState } from 'react'
import { Camera } from 'lucide-react'
import { bookStore } from '../../store/bookStore'

const PostBooks = () => {
  const { isPostingBook, postBook } = bookStore()
  const [data, setData] = useState({
    title: '',
    author: '',
    status: '',
    coverImage: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setData((prev) => ({ ...prev, coverImage: reader.result }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await postBook(data)
      setData({ title: '', author: '', status: '', coverImage: null })
    } catch (error) {
      console.log(error?.message)
    }
  }

  return (
    <section className=" bg-gray-50 dark:bg-gray-900 px-4 py-10 flex justify-center">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          Post a New Book
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <label
            htmlFor="coverImage"
            className="flex flex-col items-center justify-center w-full p-6 cursor-pointer rounded-xl border-2 border-dashed border-purple-400 text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-700 transition"
          >
            {data.coverImage ? (
              <img
                src={data.coverImage}
                alt="Preview"
                className="w-40 h-52 object-cover rounded-xl shadow-md"
              />
            ) : (
              <div className="flex flex-col items-center">
                <Camera size={34} />
                <span className="mt-2 text-sm font-medium">Click to upload cover image</span>
              </div>
            )}
          </label>

          <input
            id="coverImage"
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />

          <input
            type="text"
            name="title"
            value={data.title}
            placeholder="Book Title"
            required
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="text"
            name="author"
            value={data.author}
            placeholder="Author"
            required
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <select
            name="status"
            value={data.status}
            required
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
          >
            <option value="">Select Status</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Reading">Reading</option>
            <option value="Completed">Completed</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white cursor-pointer bg-purple-600 hover:bg-purple-700 transition font-semibold shadow-lg shadow-purple-500/20"
          >
            {isPostingBook ? 'Posting Book...' : 'Post Book'}
          </button>

        </form>
      </div>
    </section>
  )
}

export default PostBooks
