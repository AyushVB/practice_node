import userModel from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

class userController{
    static userRegistration=async(req,res)=>{
       
        const{name,email,password,password_confirmation,tc} =req.body
        const user=await userModel.findOne({email:email})
        if(user){
            res.status(409).send({"status":"failed","message":"Email already exists"})
        }
        else{
            if(name && email && password && password_confirmation && tc){
                if(password === password_confirmation){
                    try {
                        const salt=await bcrypt.genSalt(12)
                        const hashPassword=await bcrypt.hash(password,salt)
                        const newUser=new userModel({
                            name:name,
                            email:email,
                            password:hashPassword,
                            tc:tc
                        })
                       
                        await newUser.save()
                       
                        // JWT create
                        //const saved_user=await userModel.findOne({email:email})
                        //const token=jwt.sign({userID:saved_user._id},process.env.JWT_SECRET_KEY,{expiresIn:'5d'})
                        res.status(201).send({"status":"success","message":"Registeration successfully..."})


                    } catch (error) {
                        res.send({"status":"failed","message":"Unable to register...."})
                    }
                }
                else{
                    res.send({"status":"failed","message":"Password and confirm password doesn't match"})
                }
            }
            else{
                res.send({"status":"failed","message":"All fields are required"}) 
            }
        }
    }
}

export default userController