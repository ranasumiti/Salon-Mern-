const mongoose = require("mongoose")

const BeauticianSchema = new mongoose.Schema({
    // autoId: { type: String, default: null },
    name: { type: String, default: null },
    email: { type: String, default: null },
    phone: { type: String, default: null },
    password: { type: String, default: null },
    profileImage: {type: String, default:'' },
    address: {type: String, default:''},
    gender:{type:String, default:''},
    specialization: {type: String},
    experience: {type: String,default: 0},
    qualification: {type: String,default: ""},
    otp: { type: String, default:''},
    otpExpiry: {type: Date, default:''},
    isVerified: {type: Boolean,default: true},
    userType: { type: Number, default: 4 },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },

})

module.exports = mongoose.model("beautician", BeauticianSchema)