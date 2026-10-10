const UserModel = require("../apis/user/UserModel")
const bcrypt = require("bcrypt")

const seed = async ()=>{

    const existUser = await UserModel.findOne({email: "admin@gmail.com" })
        if(existUser){
            console.log("admin already exist")
            return
        }
        let securepassword = await bcrypt.hash("love@123", 10)
        let userObj = UserModel()
        userObj.name = "admin"
        userObj.email = "admin@gmail.com"
        userObj.userType = 1
        userObj.phone = "8746539673"
        userObj.autoId = "USER-1"
        userObj.password = securepassword        


        await userObj.save()
        console.log("admin created")
}

module.exports=seed