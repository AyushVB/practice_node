import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/connectDB.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const app =express()

const PORT=process.env.PORT ||3000
const DB_URL=process.env.DB_URL

// CORS Policy
app.use(cors())

// Database Connection
connectDB(DB_URL)

// JSON
app.use(express.json())

// Load Routes
app.use('/api/user',userRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`)
})