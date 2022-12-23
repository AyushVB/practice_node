import mongoose from "mongoose"

const connectDB=async(DB_URL)=>{
    try {
        const DB_OPTIONS={
            useNewUrlParser:true
        }
        mongoose.set('strictQuery', false);
        await mongoose.connect(DB_URL,DB_OPTIONS)
        console.log('connected Successfully....')
    } catch (error) {
        console.log(error)
    }
}
export default connectDB