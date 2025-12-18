import { Router } from "express";
import { createProject,updateProject,getAllProjects,getSingleProject,deleteProject } from "../controllers/projectController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const projectRouter=Router()

projectRouter.post('/create',authMiddleware,createProject)
projectRouter.put('/update/:id',authMiddleware,updateProject)
projectRouter.get('/projects',getAllProjects)
projectRouter.get('/projects/:id',authMiddleware,getSingleProject)
projectRouter.delete('/delete/:id',authMiddleware,deleteProject)



export default projectRouter