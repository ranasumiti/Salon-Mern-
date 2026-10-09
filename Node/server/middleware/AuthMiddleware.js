const jwt= require("jsonwebtoken")

const AuthMiddleware = (req,res,next)=>{
    try{
    const token = req.headers?.authorization

    if(!token){
        return res.json({
            status:400,
            success:false,
            message:"token required"
        })
    }
    const decocded = jwt.verify(token,"LOVE KAUR")
    req.decoded = decocded
    next()
    }
    catch(error){
        res.json({
            status:500,
            success:false,
            message:"internal server error" + error
        })
    }
}

module.exports = AuthMiddleware