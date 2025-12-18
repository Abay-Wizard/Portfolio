import { create } from "zustand";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";
export const projectStore=create((set,get)=>({
    projects:[],
    project:{},
    isCreatingProject:false,
    isUpdatingProject:false,
    isFetchingProjects:false,
    isFethcingProject:false,
    createProject:async(data)=>{
        set({isCreatingProject:true})
        try {
            const res=await axiosInstance.post('/project/create',data)
            if(res.data.success){
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error?.message)
            toast.error(error?.response?.data?.message)
        }finally{
         set({isCreatingProject:false})
        }
    },
    updateProject:async(id,data)=>{
        set({isUpdatingProject:true})
        const {projects}=get()
        try {
            const res=await axiosInstance.put(`/project/update/${id}`,data)
            if(res.data.success){
              const updatedProjects=projects.map((project)=>project._id ===id ? res.data.data:project)
              set({projects:updatedProjects})
              toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error?.message)
            toast.error(error?.response?.data?.message)
        }finally{
          set({isUpdatingProject:false})
        }
    },
    fetchProjects:async()=>{
        set({isFetchingProjects:true})
        try {
            const res=await axiosInstance.get('/project/projects')
            if(res.data.success){
                set({projects:res.data.data})
            }
        } catch (error) {
            console.log(error?.message)
            toast.error(error?.response?.data?.message)
        }finally{
          set({isFetchingProjects:false})
        }
    },

    fetchProject:async(id)=>{
        set({isFethcingProject:true})
        try {
           const res=await axiosInstance.get(`/project/projects/${id}`) 
           if(res.data.success){
            set({project:res.data.data})
           }
        } catch (error) {
            console.log(error?.message)
            toast.error(error?.response?.data?.message)
        }finally{
          set({isFetchingProject:false})
        }
    },

    deleteProject:async(id)=>{
        const {projects}=get()
        try {
            const res=await axiosInstance.delete(`/project/delete/${id}`)
            if(res.data.success){
                const updatedProjects=projects.filter((project)=>project._id !==id)
                set({projects:updatedProjects})
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error?.message)
            toast.error(error?.response?.data?.message)
        }
    }
}))