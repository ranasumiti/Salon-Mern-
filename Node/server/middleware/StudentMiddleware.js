const StudentMiddleware = (req, res, next) => {
    // console.log("Decoded: ", req.decoded)
    if (req.decoded?.userType != 3) {
        return res.json({
            status:403,
            success:false,
            message:"student required"
        })
    }
    next()
}

module.exports = StudentMiddleware
