import React, { useEffect } from 'react'
import { bookStore } from '../store/bookStore'
import dateConverter from '../lib/dateConverter'

const Books = () => {
  const { fetchBooks, isFetchingBooks, books } = bookStore()

  useEffect(() => {
    fetchBooks()
  }, [])

  const statusColors = {
    Completed: "bg-green-100 text-green-700 border-green-300",
    Reading: "bg-blue-100 text-blue-700 border-blue-300",
    Scheduled: "bg-yellow-100 text-yellow-700 border-yellow-300"
  }

  if (isFetchingBooks) {
    return (
      <h1 className="text-purple-500 text-3xl text-center py-20">
        Loading Books...
      </h1>
    )
  }

  return (
    <section className="px-4 py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-10 text-center tracking-tight">
        Books Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
          >
            <div className="relative w-full">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-72 object-contain bg-gray-100 dark:bg-gray-700"
              />
            </div>

            <div className="p-5 flex flex-col">
              <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {book.title}
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                {book.author}
              </p>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold border w-fit mb-4 ${
                  statusColors[book.status] ||
                  "bg-gray-100 text-gray-700 border-gray-300"
                }`}
              >
                {book.status}
              </span>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto">
                Posted: {dateConverter(book.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Books
