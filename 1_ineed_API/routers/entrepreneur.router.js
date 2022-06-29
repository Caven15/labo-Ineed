const express = require("express")
const router = express.Router()
const entrepreneurController = require("../controllers/entrepreneur.controller")
const {jwtControl, clientControl, moderateurControl, entrepreneurControl} = require("../middleware/auth")
const { upload } = require("../tools/multerConfig")

// route libre
    router.get("/getByName/:name", entrepreneurController.getByName)


// route utilisateur connecté
    //...


// route entrepreneur
    router.get("/getById/:id", jwtControl, entrepreneurControl, entrepreneurController.getById)
    router.get("/getByUtilisateurId/:id", jwtControl, entrepreneurControl, entrepreneurController.getByUtilisateurId)
    router.patch("/updateById/:id", jwtControl, entrepreneurControl, upload.single("image"), entrepreneurController.updateById)
    router.delete("/delete/:id", jwtControl, entrepreneurControl, entrepreneurController.delete)


// route administration
    router.get("/getAll", jwtControl, moderateurControl, entrepreneurController.getAll)

module.exports = router