import Blog from "../models/blogModel.js";
import cloudinary from "../config/cloudinary.js";

const createBlog = async (req, res) => {
  const { title, content, images } = req.body;
  try {
    if (!title || !content) {
      return res.status(401).json({
        success: false,
        message: "You need title and content for blog post!"
      });
    }
    let imageUrls = [];
    if (images && images.length > 0) {
      const uploadPromises = images.map((img) => {
        return cloudinary.uploader.upload(img, { folder: "blogs",timeout:60000 });
      });
      const results = await Promise.all(uploadPromises);
      imageUrls = results.map((r) => r.secure_url);
    }
    const newBlog = new Blog({
      title,
      content,
      images: imageUrls
    });
    await newBlog.save();
    res.status(201).json({
      success: true,
      message: "Blog posted successfully!"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error!"
    });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, images } = req.body;

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found!" });
    }

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "You need title and content to update a blog!",
      });
    }

    const existingImages = blog.images || [];

    const prevImages = images.filter((img) => img.startsWith("http"));
    const newBase64Images = images.filter((img) => !img.startsWith("http"));

    let finalImages = [...prevImages];

    if (newBase64Images.length > 0) {
      const uploadPromises = newBase64Images.map((img) =>
        cloudinary.uploader.upload(img, { folder: "blogs" })
      );

      const results = await Promise.all(uploadPromises);
      const newUrls = results.map((r) => r.secure_url);

      finalImages = [...prevImages, ...newUrls];
    }

    const removedImages = existingImages.filter((img) => !finalImages.includes(img));

    if (removedImages.length > 0) {
      const deletePromises = removedImages.map((img) => {
        const publicId = img.split("/").slice(-1)[0].split(".")[0];
        return cloudinary.uploader.destroy(`blogs/${publicId}`);
      });

      await Promise.all(deletePromises);
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, images: finalImages },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Blog updated successfully!",
      data: updatedBlog,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};


const getBlogs=async(_,res)=>{
  try {
    const blogs=await Blog.find()
    if(!blogs.length){
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
    console.log(error)
    res.status(500).json({success:false,message:'Internal server error!'})
  }
}

const deleteBlog=async(req,res)=>{
  const {id} =req.params
  try {
   const blog= await Blog.findById(id)
   if(!blog){
    return res.status(404).json({success:false,message:'No blog found!'})
   }
  const images=blog.images||[]
  if(images && images.length >0){
    const deletePromises=images.map((img)=>{
    const publicId=img.split('/').slice(-1)[0].split('.')[0]
    return cloudinary.uploader.destroy(`blogs/${publicId}`)
  })
  await Promise.all(deletePromises)
  }

  await Blog.findByIdAndDelete(id)
  res.status(201).json({success:true,message:'Blog deleted successfully!'})

  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:'Internal server error!'})
  }
}



export {createBlog,updateBlog,getBlogs,getSingleBlog,deleteBlog}