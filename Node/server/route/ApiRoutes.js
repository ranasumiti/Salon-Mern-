const express=require("express")

const router=express.Router()

const UserController = require('../apis/user/UserController')
const {cloudUpload}=require('../middleware/Multer')
const AuthMiddleware = require('../middleware/AuthMiddleware')


router.post("/register",cloudUpload.single('profileImage'),UserController.register)
router.post("/verifyotp",UserController.verifyOTP)
router.post("/login",UserController.login)
router.post("/login/forgotpassword",UserController.forgotPassword)
router.post("/login/reset",UserController.resetPassword)





router.use(AuthMiddleware)
router.post("/login/changepassword",UserController.changePassword)


module.exports=router