import jwt from 'jsonwebtoken'
const generateToken=async(res)=>{
    const token=jwt.sign({admin:true},process.env.jwt_secret,{expiresIn:'7d'})
    res.cookie('jwt',token,{
        maxAge:60*60*24*7*1000,
        secure:true,
        httpOnly:true,
        samesite:'none'
    })

    return token
}


export default generateToken