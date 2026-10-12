const express=require("express")

const router=express.Router()
const UserController = require("../apis/user/UserController")
const AuthMiddleware = require("../middleware/AuthMiddleware")
const AdminMiddleware = require('../middleware/AdminMiddleware')


router.post("/login",UserController.login)
router.post("/forgotpassword",UserController.forgotPassword)
router.post("/reset",UserController.resetPassword)


router.use(AuthMiddleware)
router.post("/changepassword",UserController.changePassword)
router.use(AdminMiddleware)






module.exports=router