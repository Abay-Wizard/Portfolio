import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import generateToken from '../lib/genToken.js'
const registerUser=async(req,res)=>{
    const {name,email,password}=req.body
    try {
        if(!name ||!email ||!password){
        return res.status(400).json({success:false,message:'You need name, email and password to register!'})
    }
    const salt =await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    const newUser=new User({
        name,
        email,
        password:hashedPassword

    })
    await newUser.save()
    await generateToken(newUser._id,res)
    res.status(201).json({success:true,message:'User registered successfully!',data:newUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"Internal server error!"})
    }
}


const loginUser=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await User.findOne({email})
        if(!user){
            return res.status(200).json({success:false,message:"Invalid email or password!"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(403).json({success:false,message:'Invalid email or password!'})
        }
        await generateToken(user._id,res)
        res.status(200).json({success:true,message:'Login successfull!',data:user})


    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error!'})
    }
}


export {registerUser,loginUser}