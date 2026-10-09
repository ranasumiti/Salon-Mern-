const multer = require("multer")
const path = require("path")

const userStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/user'))
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
  }
})

const userUpload = multer({ storage: userStorage })





const cloudStorage = multer.memoryStorage()
const cloudUpload = multer({storage: cloudStorage})


module.exports={userUpload,  cloudUpload}