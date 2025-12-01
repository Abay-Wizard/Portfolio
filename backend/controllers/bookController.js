import Book from "../models/bookModel.js";
import cloudinary from "../config/cloudinary.js";
const postBook=async(req,res)=>{
    const {title,author,status,coverImage}=req.body
    let imageUrl;
    try {
        if(!title || !author ||!status){
            return res.status(401).json({success:false,message:'You need title, author, and status to post book!'})
        }
        if(coverImage){
          const uploadResponse=await cloudinary.uploader.upload(coverImage,{folder:'books'})
          imageUrl=uploadResponse.secure_url

        }
        const newBook= new Book({
            title,
            author,
            status,
            coverImage:imageUrl
        })
        await newBook.save()
        res.status(201).json({success:true,message:'Book posted successfully!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error!'})
    }
}

const updateBook=async(req,res)=>{
    const {title,author,status,coverImage}=req.body
    const {id} = req.params
    let finalImage;
    try {
        const book=await Book.findById(id)
        const existingImage=book.coverImage ||null
        if(!coverImage.startswith('http')){
            const uploadResponse=await cloudinary.uploader.upload(coverImage)
            finalImage=uploadResponse.secure_url
        }
        else{
            finalImage=existingImage
        }
       
        if(existingImage.startsWith('http') && !finalImage.startsWith('http')){
            const publicId=existingImage.split('/').slice(-1)[0].split('.')[0]
            await cloudinary.uploader.destroy(`books/${publicId}`)
        }

        const updatedBook=await Book.findByIdAndUpdate(id,{title,author,status,coverImage:finalImage},{new:true})
        res.status(201).json({success:true,message:'Book updated successfully!',data:updatedBook})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error!'})
    }
}

const getBooks=async(res)=>{
    try {
        const books=await Book.find()
        if(!books){
            return res.status(404).json({success:false,message:'No books found!'})
        }
        res.status(200).json({success:true,message:'Books fetched successfully!',data:books})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error!'})
    }
}

const getSingleBook=async(req,res)=>{
    const {id} =req.params
    try {
        const book=await Book.findById(id)
        if(!book){
            return res.status(404).json({success:false,message:'No book found!'})
        }
        res.status(200).json({success:true,message:'Book is fetched successfully!',data:book})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error!'})
    }
}

const deleteBook=async(req,res)=>{
    const {id}=req.params
    try {
        const book=await Book.findById(id)
        if(!book){
            return res.status(404).json({success:false,message:'Book not found!'})
        }
        const removedImage=book.coverImage||null
        if(removedImage){
            const publicId=removedImage.split('/').slice(-1)[0].split('.')[0]
            await cloudinary.uploader.destroy(`books/${publicId}`)
        }
        await book.deleteOne()
        res.status(201).json({success:true,message:'Book deleted successfully!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error!'})
    }
}

export {postBook,updateBook,getSingleBook,getBooks,deleteBook}