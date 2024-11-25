import express from "express";
import authController from '../Controllers/authcontroller.js'
import roleAuthorization from "../Middelwares/authentication.js"

const router = express.Router()


router.post('/register',authController.register)
router.post('/login',authController.login)
router.post('/logout',roleAuthorization.verifyToken,authController.logout)

router.get(
    '/admin-data',
    roleAuthorization.verifyToken,
    roleAuthorization.roleAuthorization(['Admin']),
    (req,res)=>{
        res.json({message: 'Welcome, Admin!' })
    }
)

export default router