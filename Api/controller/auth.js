import User from "../models/user.js"
import bcrypt from "bcrypt"
export const register = async (req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,

        })
        await newUser.save();
    res.status(200).send("User has been created.");
    }
    
     catch (error) {
        next(error)
        
    }

}