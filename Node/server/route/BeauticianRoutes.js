const express=require("express")

const router=express.Router()

const BeauticianController = require('../apis/beautician/BeauticianController')
const {cloudUpload}=require('../middleware/Multer')
const BeauticianMiddleware = require("../middleware/BeauticianMiddleware")



router.post("/register",cloudUpload.single('profileImage'),BeauticianController.register)
router.post("/verifyotp",BeauticianController.verifyOTP)
router.post("/login",BeauticianController.login)
router.post("/forgotpassword",BeauticianController.forgotPassword)
router.post("/reset",BeauticianController.resetPassword)





router.use(BeauticianMiddleware)
router.post("/login/changepassword",BeauticianController.changePassword)


module.exports=router