import {create} from 'zustand'
import {toast} from 'react-hot-toast'
import axiosInstance from '../lib/axios'
export const blogStore=create((set,get)=>({
    token:null,
    blogs:[],
    blog:{},
    isPostingBlog:false,
    isUpdatingBlog:false,
    isFetchingBlogs:false,
    isDeletingBlog:false,
    postBlog:async(data)=>{
        set({isPostingBlog:true})
        try {
          const res=await axiosInstance.post('/blog/post',data)
          if(res.data.success){
           toast.success(res.data.message)
          }

        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        } finally{
          set({isPostingBlog:false})
        }
    },
    updateBlog:async(data,id)=>{
        set({isUpdatingBlog:true})
        try {
            const res=await axiosInstance.put(`/blog/update/${id}`,data)
            if(res.data.success){
                const updatedBlogs=get().blogs.map(blog=>blog._id !==id ? blog:res.data.data) //for instan ui update
                set({blogs:updatedBlogs}) 
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)

        }finally{
          set({isUpdatingBlog:false})
        }
    },
    fetchSingleBlog:async(id)=>{
        try {
            const res=await axiosInstance.get(`/blog/blogs/${id}`)
            if(res.data.success){
                set({blog:res.data.data})
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    },
    fetchBlogs:async()=>{
        set({isFetchingBlogs:true})
        try {
            const res=await axiosInstance.get('/blog/blogs')
            if(res.data.success){
                set({blogs:res.data.data})
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }finally{
          set({isFetchingBlogs:false})
        }
    },
    deleteBlog:async(id)=>{
       set({isDeletingBlog:true})
       try {
        const res=await axiosInstance.delete(`/blog/delete/${id}`)
        if(res.data.success){
            const updatedBlogs=get().blogs.filter(blog=>blog._id !==id)
            set({blogs:updatedBlogs})
            toast.success(res.data.message)
        }
       } catch (error) {
          console.log(error)
          toast.error(error?.response?.data?.message)
       }finally{
         set({isDeletingBlog:false})
       }
    },

    adminLogin:async(data)=>{
        try {
            const res=await axiosInstance.post('/admin/login',data)
            if(res.data.success){
                toast.success(res.data.message)
                localStorage.setItem('user',res.data.data)
                return true
            }
            else{
                return false
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }


}))