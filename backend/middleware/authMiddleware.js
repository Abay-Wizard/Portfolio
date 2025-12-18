import jwt from 'jsonwebtoken';
import {config} from 'dotenv'
import User from '../models/userModel.js'
config()
const authMiddleware = async (req, res, next) => {
  const token = req.cookies?.jwt;
  if (!token) {
    return res.status(401).json({ success: false, message: "Please login!" });
  }

  const decoded=await jwt.verify(token,process.env.jwt_secret)
  const user=await User.findById(decoded.id)
  if(!user){
    return res.status(403).json({success:false,message:'You are not authorized!'})
  }
  req.user=user
  next();
};

export default authMiddleware;
