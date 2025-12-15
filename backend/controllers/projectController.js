import Project from "../models/projectModel.js";
import cloudinary from "../config/cloudinary.js";

const createProject=async(req,res)=>{
    const {projectName,description,coverImage}=req.body
    let imageUrl;
    try {
        if(!projectName || !description){
            return res.status(401).json({success:false,message:"You need projectName and description to create a project!"})
        }
        if(coverImage){
            const uploadResponse=await cloudinary.uploader.upload(coverImage,{folder:'projects'})
            imageUrl=uploadResponse.secure_url
        }
        const newProject=new Project({
            projectName,
            description,
            coverImage:imageUrl
        })
        await newProject.save()
        res.status(201).json({success:true,message:'Project created successfully!',data:newProject})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error!'})
    }
}

const updateProject=async(req,res)=>{
    const {id}=req.params
    const {projectName,description,coverImage}=req.body
    let image;
    try {
        const project=await Project.findById(id)
        if(!project){
            res.status(404).json({success:false,message:'Project not found!'})
        }
        existingImage=project.coverImage || null
        if(coverImage && !coverImage.startsWith('https')){
          const uploadResponse=await cloudinary.uploader.upload(coverImage,{folder:'projects'})
          image=uploadResponse.secure_url
        }
        else{
            image=existingImage
        }
    } catch (error) {
        
    }
}



export {createProject}