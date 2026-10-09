const UserModel = require('./UserModel')
const joi = require('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { uploading } = require('../../helper/Cloudinary')
const sendEmail = require('../../utilities/Mail')
const saltPassword = 10


//register
const register = async (req, res) => {
    try {
        const formData = req.body || {}
console.log(formData)
        const registerSchema = joi.object({
            name: joi.string().required().min(3).max(50),
            email: joi.string().email().required(),
            phone: joi.string().required().pattern(/^[0-9]{10}$/),
            password: joi.string().required().max(6),
        }) 

        const {value, error} = registerSchema.validate(formData, {abortEarly: false})
        let errors = error?.details?.map((item)=>{
            return item.message;
        })
        if(errors){
            return res.json({
                stauts:400,
                success:false,
                message: errors
                
            })
        }
       

        let existsUser = await UserModel.findOne({ email: value.email })
        if (existsUser) {
            return res.json({
                status: 404,
                success: false,
                message: "User already existing"
            })
        }

          

        let count = await UserModel.countDocuments({})
        let securePassword = await bcrypt.hash(value.password, saltPassword)

        const otp = Math.floor(100000 + Math.random() * 900000).toString()

        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000)


        let userobj = UserModel()
        userobj.name = value.name,
            userobj.email = value.email,
            userobj.phone = value.phone,
            userobj.password = securePassword


        userobj.otp = otp
        userobj.otpExpiry = otpExpiry
        userobj.isVerified = false;

        userobj.autoId = 'USER-' + (count + 1);

          let imageUrl =""
        if(!!req.file){
         
            imageUrl = await uploading(req.file?.buffer)
            userobj.profileImage = imageUrl 
        }
        const saveuser = await userobj.save()

        console.log("OTP:", otp);
        return res.json({
            status: 200,
            success: true,
            message: "User registered",
            data: saveuser
        })
    }
    catch (error) {

       return  res.json({
            status: 500,
            success: false,
            message: "internal server error" + error
        })
    }
}

// verify otp
const verifyOTP = async (req, res) => {

    try {

        const { email, otp } = req.body

        if (!email || !otp) {

            return res.json({
                status: 400,
                success: false,
                message: "Email and OTP are required"
            });

        }

        const userData = await UserModel.findOne({ email: email })

        if (!userData) {
            return res.json({
                status: 404,
                success: false,
                message: "User not found"
            });

        }

        if (userData.isVerified) {

            return res.json({
                status: 400,
                success: false,
                message: "Account already verified"
            });

        }

        if (userData.otp !== otp) {

            return res.json({
                status: 400,
                success: false,
                message: "Invalid OTP"
            });

        }

        if (userData.otpExpiry < new Date()) {

            return res.json({
                status: 400,
                success: false,
                message: "OTP expired"
            });

        }

        // Verify account
        userData.isVerified = true;

        // Remove OTP
        userData.otp = undefined;
        userData.otpExpiry = undefined;

        const saverData = await userData.save();

        return res.json({
            status: 200,
            success: true,
            message: "Account verified successfully",
            data: saverData
        });

    } catch (error) {

        return res.json({
            status: 500,
            success: false,
            message: "Internal server error " + error
        });

    }
};

//login
const login = async (req, res) => {
    try {
        const formData = req.body || {}

        let validation = ''

        if (!formData.email) validation += "email id required,"
        if (!formData.password) validation += "password id required"

        if (validation) {
            return res.json({
                status: 400,
                success: false,
                message: validation
            })
        }
        let User = await UserModel.findOne({ email: formData.email })
        if (!User) {
            return res.json({
                status: 404,
                success: false,
                message: "User not found"
            })
        }
        // Check verification
        if (!User.isVerified) {

            return res.json({
                status: 403,
                success: false,
                message: "Please verify your account using OTP first"
            });

        }
        let passwordmatch = await bcrypt.compare(formData.password, User.password)
        if (!passwordmatch) {
            return res.json({
                status: 403,
                success: false,
                message: "invalid email and password"
            })
        }
        else {
            let payload = {
                _id: User._id,
                email: formData.email,
                userType: User.userType
            }
            // console.log(payload)
            let token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"1d"})
            return res.json({
                status: 200,
                success: true,
                message: "Lodin successfully",
                token: token,
                data: User
            })
        }
    }
    catch (error) {
        return res.json({
            status: 500,
            success: false,
            message: "internal server error" + error
        })
    }
}

//change password
const changePassword = async (req, res) => {
    try {
        const formData = req.body || {}

        let validation = ''

        if (!formData.oldPassword) validation += "old Password is required"
        if (!formData.newPassword) validation += "new Password is required"

         if (validation) {
            return res.json({
                status: 400,
                success: false,
                message: validation
            })
        }

        const userId = req.decoded?._id
        const userData = await UserModel.findOne({ _id: userId })
         if (!userData) {
            return res.json({
                status: 404,
                success: false,
                message: "User not found"
            })
        }
        // console.log(userData)
        // console.log(formData)
        const IsPasswordMatch = await bcrypt.compare(formData.oldPassword, userData.password)
        // console.log(IsPasswordMatch)
        if (!IsPasswordMatch) {
            return res.json({
                status: 400,
                success: false,
                message: "Incorrect password"

            })
        }
        let hashPassword = await bcrypt.hash(formData.newPassword, saltPassword)
        userData.password = hashPassword
        const updateUser = await userData.save()
        return res.json({
            status: 200,
            success: true,
            message: "Password Updated",
            data: updateUser
        })

    } catch (error) {
        return res.json({
            status: 500,
            success: false,
            message: "Internal server error" + error
        })
    }
}
//forgot password
const forgotPassword = async (req, res) => {
    try {
        const formData = req.body || {}

        if (!formData.email) {
            return res.json({
                status: 400,
                success: false,
                message: "Email is required"
            })
        }

        const userData = await UserModel.findOne({ email: formData.email })

        if (!userData) {
            return res.json({
                status: 404,
                success: false,
                message: "No such user exist"
            })
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString()

        const otpExpiry = Date.now() + (5 * 60 * 1000)

        userData.otp = otp
        userData.otpExpiry = otpExpiry

        const savedUser = await userData.save()

        let payload ={
            email: formData.email,
            subject:"OTP for password reset",
            html:`<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 30px; background: #f7f7f7;">
            
            <div style="background: #ffffff; padding: 30px; border-radius: 10px;">
                
                <h2 style="margin-top: 0; color: #222;">
                    Password Reset Request
                </h2>

                <p style="color: #555; font-size: 15px;">
                    We received a request to reset the password for your account.
                </p>

                <p style="color: #555; font-size: 15px;">
                    Use the following OTP to reset your password:
                </p>

                <div style="
                    text-align: center;
                    font-size: 32px;
                    font-weight: bold;
                    letter-spacing: 8px;
                    margin: 30px 0;
                    color: #111;
                ">
                    ${otp}
                </div>

                <p style="color: #555; font-size: 14px;">
                    This OTP is valid for <strong>10 minutes</strong>.
                </p>

                <p style="color: #777; font-size: 13px;">
                    If you did not request a password reset, you can safely ignore this email.
                    Do not share this OTP with anyone.
                </p>

                <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">

                <p style="color: #999; font-size: 12px; margin-bottom: 0;">
                    This is an automated email. Please do not reply.
                </p>

            </div>
        </div>` }

        await sendEmail(payload)

        res.json({
            status: 200,
            success: true,
            message: "OTP Generated",
            data: savedUser.otp
        })
    }
    catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "ISE: " + err
        })
    }
}

const resetPassword = async (req, res) => {
    try {
        const formData = req.body || {}

        let validation = ''

        if (!formData.email) validation += 'email is required, '
        if (!formData.otp) validation += 'otp is required, '
        if (!formData.newPassword) validation += 'newPassword is required'

        if (validation) {
            return res.json({
                status: 400,
                success: false,
                message: "VE: " + validation
            })
        }
        const userData = await UserModel.findOne({ email: formData.email })
        if (!userData) {
            return res.json({
                status: 404,
                success: false,
                message: "No such user exist"
            })
        }

        if (userData.otp != formData.otp) {
            return res.json({
                status: 400,
                success: false,
                message: "Invalid OTP"
            })
        }

        if (new Date() > userData.otpExpiry) {
            return res.json({
                status: 400,
                success: false,
                message: "Expired OTP"
            })
        }

        let securePassword = await bcrypt.hash(formData.newPassword, 10)
        userData.password = securePassword
        userData.otp = null
        userData.otpExpiry = null

        await userData.save()

        res.json({
            status: 200,
            success: true,
            message: "OTP verified & Password Changed"
        })

    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "ISE: " + err
        })
    }

}

module.exports ={register,verifyOTP, login, forgotPassword, changePassword, resetPassword } 