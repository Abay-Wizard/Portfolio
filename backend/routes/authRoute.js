import loginAdmin from "../controllers/authController.js";
import { Router } from "express";
const authRouter=Router()

authRouter.post('/login',loginAdmin)
export default authRouter