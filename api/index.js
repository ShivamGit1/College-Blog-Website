import express from "express"

import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())//without this we can't sen data to database
                        //middleware, Parses incoming JSON payloads

app.use(cookieParser())//middleware for handling cookies.

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)


app.listen(8000, () => {
    console.log("Connected");
})