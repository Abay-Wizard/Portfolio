import Message from "../models/messageModel.js";

const sendMessage=async(req,res)=>{
    const {name,email,message} =req.body
    try {
        const newMessage= new Message({
            name,
            message,
            email
        })
        await newMessage.save()
        res.status(201).json({success:true,message:"Message sent successfully!",data:newMessage})
    } catch (error) {
        console.log(error?.message)
        res.status(500).json({success:false,message:'Internal server error!'})
    }
}

const getMessages= async(_,res)=>{
    try {
        const messages= await Message.find({}).sort({createdAt:-1})
        res.status(200).json({success:true,message:'Messages fetched successfully!', data:messages})
    } catch (error) {
        console.log(error?.message)
        res.status(500).json({success:false,message:'Internal server error!'})
    }
}

const deleteMessage=async(req,res)=>{
    const {id} =req.params
    try {
        await Message.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'Message deleted successfully!'})
    } catch (error) {
        console.log(error?.message)
        res.status(500).json({success:false,message:'Internal server error!'})
    }
}


export {getMessages,sendMessage,deleteMessage}