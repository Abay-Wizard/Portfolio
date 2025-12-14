import jwt from 'jsonwebtoken'
const generateToken=async(res)=>{
    const token=jwt.sign({admin:true},process.env.jwt_secret,{expiresIn:'7d'})
    return token
}


export default generateToken