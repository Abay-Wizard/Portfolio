import { create } from "zustand";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";

export const bookStore=create((set,get)=>({
    books:[],
    book:{},
    isPostingBook:false,
    isUpdatingBook:false,
    isDeletingBook:false,
    isFetchingBooks:false,
    postBook:async(data)=>{
        set({isPostingBook:true})
        try {
           const res=await axiosInstance.post('/book/post',data)
           if(res.data.success){
            set({books:[...get().books,res.data.data]})
            toast.success(res.data.message)
           }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }finally{
          set({isPostingBook:false})
        }
    },
    updateBook:async(data,id)=>{
        set({isUpdatingBook:true})
        try {
            const res=await axiosInstance.put(`/book/update/${id}`,data)
            const updatedBooks=get().books.map(book=>book._id !==id ? book:res.data.data)
            set({books:updatedBooks})
            toast.success(res.data.message)
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }finally{
            set({isUpdatingBook:false})
        }
    },
    fetchBooks:async()=>{
        const {books,isFetchingBooks}=get()
        if(books.length > 0 || isFetchingBooks) return 
        set({isFetchingBooks:true})
        try {
            const res=await axiosInstance.get('/book/books')
            if(res.data.success){
                set({books:res.data.data})
                //toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }finally{
           set({isFetchingBooks:false})
        }
    },
    fetchSingleBook:async(id)=>{
        try {
            const res=await axiosInstance.get(`/book/books/${id}`)
            if(res.data.success){
                set({book:res.data.data})
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    },

    deleteBook:async(id)=>{
        try {
            const res=await axiosInstance.delete(`/book/delete/${id}`)
            if(res.data.success){
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error?.message)
            toast.error(error?.response?.data?.message)
        }
    }
}))