import React, { useEffect } from 'react'
import { Edit, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { bookStore } from '../../store/bookStore'
import BooksSkeleton from '../../components/BooksSkeleton'

const AdminBooks = () => {
  const { fetchBooks, isFetchingBooks, books, deleteBook } = bookStore()
  const navigate = useNavigate()

  useEffect(() => {
    fetchBooks()
  }, [])

  const handleDelete = async (id) => {
    try {
      if (window.confirm('Are you sure you want to delete this book?')) {
        await deleteBook(id)
        await fetchBooks()
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (isFetchingBooks) {
    return (
      <BooksSkeleton/>
    )
  }

  return (
    <section className="px-4 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-5 flex flex-col"
          >
            <div className="flex justify-end gap-3 mb-3">
              <button
                onClick={() => navigate(`/admin/books/update/${book._id}`)}
                className="p-2 rounded-lg bg-purple-100 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              >
                <Edit className="text-purple-600" />
              </button>

              <button
                onClick={() => handleDelete(book._id)}
                className="p-2 rounded-lg bg-red-100 hover:bg-red-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              >
                <Trash2 className="text-red-600" />
              </button>
            </div>

            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-48 object-cover rounded-xl mb-4 shadow-sm"
            />

            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 line-clamp-1">
              {book.title}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 line-clamp-1">
              {book.author}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Status: {book.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdminBooks
