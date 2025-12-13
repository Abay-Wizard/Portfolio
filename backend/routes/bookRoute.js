import { Router } from "express";
import { postBook,updateBook,deleteBook,getBooks,getSingleBook } from "../controllers/bookController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const bookRouter=Router()
bookRouter.post('/post',authMiddleware,postBook)
bookRouter.get('/books',getBooks)
bookRouter.put('/update/:id',authMiddleware,updateBook)
bookRouter.get('/books/:id',authMiddleware,getSingleBook)
bookRouter.delete('/delete/:id',authMiddleware,deleteBook)





export default bookRouter
