import { getMessages,sendMessage,deleteMessage } from "../controllers/messageController.js";
import express from 'express'

const router =express.Router()
router.post('/send',sendMessage)
router.get('/get',getMessages)
router.delete('/delete/:id',deleteMessage)

export default router