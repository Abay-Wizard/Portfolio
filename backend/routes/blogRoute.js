import { Router } from "express";
import { createBlog ,deleteBlog,updateBlog,getBlogs,getSingleBlog} from "../controllers/blogController.js";
import authMiddleware from '../middleware/authMiddleware.js'

const blogRouter=Router()

blogRouter.post('/post',authMiddleware,createBlog)
blogRouter.put('/update/:id',authMiddleware,updateBlog)
blogRouter.get('/blogs',getBlogs)
blogRouter.get('/blogs/:id',authMiddleware,getSingleBlog)
blogRouter.delete('/delete/:id',authMiddleware,deleteBlog)

export default blogRouter