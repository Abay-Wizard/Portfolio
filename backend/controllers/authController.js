import bcrypt from 'bcrypt'
import generateToken from '../lib/genToken.js'
const loginAdmin=async(req,res)=>{
    const {code}=req.body
    const secret=process.env.admin_hashed_code
    try {
        if(!code){
          return res.status(401).json({success:false,message:'Password required!'})
        }
       const isMatch=await bcrypt.compare(code,secret)
       if(!isMatch){
        return res.status(401).json({success:false,message:'Invalid password!'})
       }
      const token= await generateToken()
       res.status(200).json({success:true,message:'Login successful!',data:{token:token}})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error!'})
    }

}

export default loginAdmin