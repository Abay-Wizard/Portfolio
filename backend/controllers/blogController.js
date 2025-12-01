import Blog from "../models/blogModel.js";
import cloudinary from "../config/cloudinary.js";
const createBlog=async(req,res)=>{
    const {title,content,images}=req.body
    let imgageUrls;
    try {
       if(!title || !content) {
        return res.status(401).json({success:false,message:'You need title and content for blog post!'})
       }
       if(images && images.length > 0){
         const uploadPromises=images.map((img)=>{
            cloudinary.uploader.upload(img,{folder:'blogs'})
         })
         const results=await Promise.all(uploadPromises)
         imgageUrls=results.map(r=>r.secure_url)
       }
       const newBlog=new Blog({
        title,
        content,
        images:imgageUrls
       })
       await newBlog.save()
       res.status(201).json({success:true,message:'Blog posted successfully!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error!'})
    }
}


const updateBlog=async(req,res)=>{
  const {id} =req.params
  const {title,content,images}=req.body
  let finalImages;
  try {
    const blog=await Blog.findById(id)
    const existingImages=blog.images||[]
    if(!blog){
      return res.status(404).json({success:false,message:'Blog not found!'})
    }
    if(!title || !content){
      return res.status(401).json({success:false,message:'You need title and content to update a blog!'})
    }

    const prevImages=images.filter((img)=>img.startswith('http'))
    const newBase64Images=images.filter((img)=>!img.startswith('http'))
    
    if(newBase64Images.length>0){
       const uploadPromises=newBase64Images.map((img)=>{
        cloudinary.uploader.upload(img,{folder:'blogs'})
       })
      const results = await Promise.all(uploadPromises)
      const newUrls=results.map((r)=>r.secure_url)
      finalImages=[...prevImages,...newUrls]
    }
    else{
      finalImages=prevImages
    }
    const removedImages=existingImages.map((img)=>!finalImages.includes(img))
    if(removedImages.length >0){
      const deletePromises=removedImages.map((img)=>{
        const publicId=img.split('/').slice(-1)[0].split('.')[0]
        cloudinary.uploader.destroy(`blogs/${publicId}`)
      })
      await Promise.all(deletePromises)
    }
    const updatedBlog=await Blog.findByIdAndUpdate(id,{title,content,images:finalImages},{new:true})
    res.status(201).json({success:true,message:'Blog updated successfully!',data:updatedBlog})

  

  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:'Internal server error!'})
  }
}

const getBlogs=async(res)=>{
  try {
    const blogs=await Blog.find()
    if(!blogs){
      return res.status(404).json({success:false,message:'No blogs found!'})
    }
    res.status(200).json({success:true,message:'Blogs fetched successfully!',data:blogs})
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:'Internal server error!'})
  }
}

const getSingleBlog=async(req,res)=>{
  const {id} =req.params
  try {
    const blog=await Blog.findById(id)
    if(!blog){
      return res.status(404).json({success:false,message:'No blog is found!'})
    }
    res.status(200).json({success:true,message:'Blog fetched successfully!',data:blog})
  } catch (error) {
    
  }
}

const deleteBlog=async(req,res)=>{
  const {id} =req.params
  try {
   const blog= await Blog.findById(id)
   if(!blog){
    return res.status(404).json({success:false,message:'No blog found!'})
   }
  const images=blog.images
  if(images && images.length >0){
    const deletePromises=images.map((img)=>{
    const publicId=img.split('/').slice(-1)[0].split('.')[0]
    cloudinary.uploader.destroy(`blogs/${publicId}`)
  })
  await Promise.all(deletePromises)
  }

  await blog.deleteOne()
  res.status(201).json({success:true,message:'Blog deleted successfully!'})

  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:'Internal server error!'})
  }
}



export {createBlog,updateBlog,getBlogs,getSingleBlog,deleteBlog}