import jwt from 'jsonwebtoken'
const generateToken=async(id,res)=>{
    const token=jwt.sign({id},process.env.jwt_secret,{expiresIn:'7d'})
    res.cookie('jwt',token,{
        maxAge:60*60*24*7*1000,
        secure:true,
        httpOnly:true,
        sameSite:'none'
    })

    return token
}


export default generateToken