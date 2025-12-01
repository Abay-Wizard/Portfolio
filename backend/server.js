import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import messageRouter from './routes/messageRoute.js'
import authRouter from './routes/authRoute.js'
import blogRouter from './routes/blogRoute.js'


dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api/message',messageRouter)
app.use('/api/admin',authRouter)
app.use('/api/blog',blogRouter)



connectDB().then(()=>{
    app.listen(5000,()=>{
    console.log('Server is running on port 5000!')
})
})