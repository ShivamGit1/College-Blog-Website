import express from "express"
<<<<<<< HEAD
import { 
    addPost, 
    deletePost, 
    getPost, 
    getPosts, 
    updatePost 
} from "../controllers/post.js"
=======
>>>>>>> 76de28b6a886826d28e91de659c9e57284d21b09


const router = express.Router()

<<<<<<< HEAD
router.get("/", getPosts)// all post
router.get("/:id", getPost)// single post using id
router.post("/", addPost)
router.delete("/:id", deletePost)
//router.update("/:id", updatePost)//In Express.js, which is a common library for handling routes in Node.js applications, the methods for handling HTTP requests are get, post, put, delete, etc., but there’s no update method.
router.put("/:id", updatePost)                                   //If you’re trying to handle an HTTP PUT request (which is commonly used for updating resources), you should use router.put instead of router.update. Here’s how you can fix the error:
=======
>>>>>>> 76de28b6a886826d28e91de659c9e57284d21b09

export default router