import { db } from "../db.js"

import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
export const register = (req, res) => {

    //check existing user
    const q = "SELECT * FROM users WHERE email =? or username= ?"
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err)
            return res.json(err)
        if (data.length) return res.status(409).json("User already exist");

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        //inserting user in table
        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created.");
        })
    })

}
export const login = (req, res) => {

    //Check user exixst or not
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err)
            return res.json(err)
        if (data.length === 0)
            return res.status(404).json("User Not Found!");

        //match password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        
        if (!isPasswordCorrect)
<<<<<<< HEAD
            return res.status(400).json("Wrong username or password!");

        const token = jwt.sign({id:data[0].id}, "jwtkey"); // we can use any random security key inplace of jwtkey
        
        const {password, ...other}=data[0]//separate password and other values
        res.cookie("access_token", token, {
            httpOnly: true// it means any scripts in this brower and this appln can't reach to cookie directly
=======
            return res.ststus(400).json("Wrong username or password!");

        const token = jwt.sign({id:data[0].id}, "jwtkey"); // we can use any random security key inplace of jwtkey
        
        const {password, ...other}=data[0]
        res.cookie("acces_token", token, {
            httpOnly: true
>>>>>>> 76de28b6a886826d28e91de659c9e57284d21b09
        }).status(200).json(other)
    
    })
}
export const logout = (req, res) => {

<<<<<<< HEAD
    res.clearCookie("access_token", {
       sameSite: "none",
       secure:true
    }).status(200).json("Logout Successful.")
=======
>>>>>>> 76de28b6a886826d28e91de659c9e57284d21b09
}
