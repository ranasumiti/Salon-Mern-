const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    autoId: { type: String, default: null },
    name: { type: String, default: null },
    email: { type: String, default: null },
    phone: { type: String, default: null },
    password: { type: String, default: null },
    profileImage: { type: String, default: '' },
    gender: {type: String,enum: ['Male', 'Female', 'Other'], default: null},
    otp: { type: String, default: '' },
    otpExpiry: { type: Date, default: null },
    isVerified: { type: Boolean, default: false },
    userType: { type: Number, default: 4 },//admin ,2.customer, 3.Student, 4.beautician
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },

})

module.exports = mongoose.model("user", UserSchema)