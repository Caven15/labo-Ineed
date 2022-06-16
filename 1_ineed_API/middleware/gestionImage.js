const path = require("path")
const { v4 : uuid } = require("uuid")
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) 
    {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) 
    {
        let extensionOrigin = path.extname(file.originalname)
        cb(null, uuid() + '.' + extensionOrigin)
    }
})

const fileFilter = (req, file, cb) => {
    let ext = path.extname(file.originalname);

    if(ext !== '.PNG' && ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') 
    {
        return cb(new Error('Only images are allowed'))
    }

    cb(null, true)
}
exports.upload = multer({storage : storage, fileFilter : fileFilter })

exports.addImage = (req, res, next) => {
    console.log("je rentre dans mon upload d'image")
    console.log("req.body : ", req.body.test)
}


