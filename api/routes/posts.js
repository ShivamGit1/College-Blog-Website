import express from "express"
import { 
    addPost, 
    deletePost, 
    getPost, 
    getPosts, 
    updatePost 
} from "../controllers/post.js"


const router = express.Router()

router.get("/", getPosts)// all post
router.get("/:id", getPost)// single post using id
router.post("/", addPost)
router.delete("/:id", deletePost)
//router.update("/:id", updatePost)//In Express.js, which is a common library for handling routes in Node.js applications, the methods for handling HTTP requests are get, post, put, delete, etc., but there’s no update method.
router.put("/:id", updatePost)                                   //If you’re trying to handle an HTTP PUT request (which is commonly used for updating resources), you should use router.put instead of router.update. Here’s how you can fix the error:

export default router