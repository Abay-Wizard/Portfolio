import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Camera, X } from 'lucide-react'
import { blogStore } from '../../store/blogStore'

const PostBlogs = () => {
  const { isPostingBlog, postBlog } = blogStore()

  const [previewImages, setPreviewImages] = useState([])
  const [data, setData] = useState({
    title: '',
    content: '',
    images: []
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files)
    if (!files.length) return toast.error('Please upload valid files!')

    const toBase64=async(file)=>{
      return new Promise((resolve,reject)=>{
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>resolve(reader.result)
        reader.onerror=(err)=>reject(err)
      })
    }
    const base64Images=await Promise.all(files.map((file)=>toBase64(file)))

    setPreviewImages((prev) => [...prev, ...base64Images])
    setData((prev) => ({ ...prev, images: [...prev.images, ...base64Images] }))
  }

  const handleRemoveImage = (index) => {
    const newPreview = [...previewImages]
    const newImages = [...data.images]

    newPreview.splice(index, 1)
    newImages.splice(index, 1)

    setPreviewImages(newPreview)
    setData((prev) => ({ ...prev, images: newImages }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await postBlog(data)
      setData({
        title:'',
        content:'',
        images:[]
      })
      setPreviewImages([])
    } catch (error) {
      console.log(error?.message)
    }
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-10 flex justify-center">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          Create Blog Post
        </h1>

        {/* Image preview grid */}
        {previewImages.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {previewImages.map((img, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 bg-black/60 hover:bg-black/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Upload button */}
          <label
            htmlFor="images"
            className="flex flex-col items-center justify-center w-full p-6 cursor-pointer rounded-xl border-2 border-dashed border-purple-400 text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-700 transition"
          >
            <Camera size={34} />
            <span className="mt-2 text-sm font-medium">Click to upload images</span>
          </label>

          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={handleImageUpload}
          />

          {/* Title */}
          <input
            type="text"
            name="title"
            value={data.title}
            placeholder="Blog title"
            required
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          {/* Content */}
          <textarea
            rows={8}
            name="content"
            value={data.content}
            placeholder="Write your blog content here..."
            required
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white cursor-pointer bg-purple-600 hover:bg-purple-700 transition font-semibold shadow-lg shadow-purple-500/20"
          >
            {isPostingBlog ? 'Posting Blog...' : 'Post Blog'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default PostBlogs
