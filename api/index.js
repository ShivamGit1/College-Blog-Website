import express from "express"

import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

import cookieParser from "cookie-parser"

import multer from "multer";
const app = express()

app.use(express.json())//without this we can't sen data to database
                        //middleware, Parses incoming JSON payloads

app.use(cookieParser())//middleware for handling cookies.

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb){
        // const uniqueSuffix = Date.now() + '-'+ Math.round(Math.random()*1E9)
        // Extracting the file extension
        const ext = file.originalname.split('.').pop();
        // Limit the original name to upto the first 20 characters
        //const maxNameLength = Math.min(20, file.originalname.length-(ext.length+1));
        //const truncatedName = file.originalname.replace(/ /g, '_').substring(0, maxNameLength);
        // Concatenating with current timestamp and extension
        // const uniqueFilename = `${truncatedName}_${Date.now()}.${ext}`;
        const uniqueFilename = `${Date.now()}_${Math.round(Math.random()*1E9)}.${ext}`;
        cb(null, uniqueFilename);
    }
})
const upload = multer({storage})

app.post('/api/upload', upload.single('file'), function(req, res){
    // console.log(req.file);
    const file = req.file;
    res.status(200).json(file.filename)  
})
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)



app.listen(8000, () => {
    console.log("Connected");
})