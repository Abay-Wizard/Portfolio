import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import messageRoute from './routes/messageRoute.js'

dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api/message',messageRoute)



connectDB().then(()=>{
    app.listen(5000,()=>{
    console.log('Server is running on port 5000!')
})
})