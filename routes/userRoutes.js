import express from 'express'
import userController from '../controllers/userController.js'

const router=express.Router()

// public routes
router.post('/register',userController.userRegistration)

// export
export default router

