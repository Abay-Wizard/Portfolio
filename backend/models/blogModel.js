import mongoose from "mongoose";
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    images:[String],
    default:[]
},{timestamps:true})

const Blog=mongoose.model('Blog',blogSchema)
export default Blog