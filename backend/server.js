import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import messageRouter from './routes/messageRoute.js'
import authRouter from './routes/authRoute.js'
import blogRouter from './routes/blogRoute.js'
import bookRouter from './routes/bookRoute.js'


dotenv.config()
const app=express()
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true  
}))
app.use(express.json({limit:'50mb'}))
app.use(cookieParser())
app.use('/api/message',messageRouter)
app.use('/api/admin',authRouter)
app.use('/api/blog',blogRouter)
app.use('/api/book',bookRouter)



connectDB().then(()=>{
    app.listen(5000,()=>{
    console.log('Server is running on port 5000!')
})
})