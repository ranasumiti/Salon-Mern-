const AdminMiddleware = (req, res, next) => {
    // console.log("Decoded: ", req.decoded)
    if (req.decoded?.userType != 1) {
        return res.json({
            status:403,
            success:false,
            message:"admin required"
        })
    }
    next()
}

module.exports = AdminMiddleware
