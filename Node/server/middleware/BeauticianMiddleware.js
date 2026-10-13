const BeauticianMiddleware = (req, res, next) => {
    // console.log("Decoded: ", req.decoded)
    if (req.decoded?.userType != 4) {
        return res.json({
            status:403,
            success:false,
            message:"student required"
        })
    }
    next()
}

module.exports = BeauticianMiddleware
