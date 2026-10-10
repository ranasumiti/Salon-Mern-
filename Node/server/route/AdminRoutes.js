const express=require("express")

const router=express.Router()
const UserController = require("../apis/user/UserController")
const AdminMiddleware = require('../middleware/AdminMiddleware')


router.post("/login",UserController.login)
router.post("/forgotpassword",UserController.forgotPassword)
router.post("/login/reset",UserController.resetPassword)
router.post("/changepassword",UserController.changePassword)



router.use(AdminMiddleware)





module.exports=router