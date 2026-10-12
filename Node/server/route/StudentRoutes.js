const express=require("express")

const router=express.Router()

const StudentController = require('../apis/student/StudentController')
const {cloudUpload}=require('../middleware/Multer')
const AuthMiddleware = require('../middleware/AuthMiddleware')


router.post("/register",cloudUpload.single('profileImage'),StudentController.register)
router.post("/verifyotp",StudentController.verifyOTP)
router.post("/login",StudentController.login)
router.post("/forgotpassword",StudentController.forgotPassword)
router.post("/reset",StudentController.resetPassword)





router.use(AuthMiddleware)
router.post("/login/changepassword",StudentController.changePassword)


module.exports=router