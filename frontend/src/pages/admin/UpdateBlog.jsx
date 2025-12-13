import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Camera, X } from 'lucide-react'
import { useParams,useNavigate } from 'react-router-dom'
import { blogStore } from '../../store/blogStore'

const UpdateBlog = () => {
  const { isUpdatingBlog, updateBlog,fetchBlogs,fetchSingleBlog,blog } = blogStore()
  const navigate=useNavigate()
  const {id}=useParams()
  const [data, setData] = useState({
    title: '',
    content: '',
    images: []
  })

  useEffect(()=>{
     fetchSingleBlog(id)
  },[id])

  useEffect(()=>{
    if(blog){
       setData({
        title:blog.title||'',
        content:blog.content||'',
        images:blog.images||[]
     })
    }
     
  },[blog])

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files)
    if (!files.length) return toast.error('Please upload valid files!')

    const toBase64=(file)=>{
      return new Promise((resolve,reject)=>{
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>resolve(reader.result)
        reader.onerror=(err)=>reject(err)
      })
    }
    const base64Images=await Promise.all(files.map((file)=>toBase64(file)))
    setData((prev) => ({ ...prev, images: [...prev.images, ...base64Images] }))
  }

  const handleRemoveImage = (index) => {
    const newImages = [...data.images]
    newImages.splice(index, 1)
    setData((prev) => ({ ...prev, images: newImages }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateBlog(data,id)
      setData({
        title:'',
        content:'',
        images:[]
      })
     await fetchBlogs()
     navigate('/admin/blogs')
    } catch (error) {
      console.log(error?.message)
    }
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-10 flex justify-center">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          Update Blog
        </h1>

       
        {data.images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {data.images.map((img, index) => (
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

          <input
            type="text"
            name="title"
            value={data.title}
            placeholder="Blog title"
            required
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <textarea
            rows={8}
            name="content"
            value={data.content}
            placeholder="Write your blog content here..."
            required
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white bg-purple-600 hover:bg-purple-700 transition font-semibold shadow-lg shadow-purple-500/20"
          >
            {isUpdatingBlog ? 'Updating Blog...' : 'Update Blog'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default UpdateBlog
