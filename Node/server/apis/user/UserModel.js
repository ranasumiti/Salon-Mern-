const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    // autoId: { type: String, default: null },
    name: { type: String, default: null },
    email: { type: String, default: null },
    phone: { type: String, default: null },
    password: { type: String, default: null },
    profileImage: {type: String, default:'' },
    otp: { type: String, default:''},
    otpExpiry: {type: Date, default:''},
    isVerified: {type: Boolean,default: true},
    userType: { type: Number, default: 2 },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },

})

module.exports = mongoose.model("user", UserSchema)