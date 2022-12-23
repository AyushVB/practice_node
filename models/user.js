import mongoose from "mongoose"

// Defination schema
const userSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true,min:3},
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},
    tc:{type:Boolean,required:true}
})

// Model
const userModel=mongoose.model("user",userSchema)

export default userModel