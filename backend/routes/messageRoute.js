import {Router} from 'express'
import { getMessages,sendMessage,deleteMessage } from "../controllers/messageController.js";
import authMiddleware from '../middleware/authMiddleware.js';

const messageRouter =Router()
messageRouter.post('/send',sendMessage)
messageRouter.get('/get',authMiddleware,getMessages)
messageRouter.delete('/delete/:id',authMiddleware,deleteMessage)

export default messageRouter