const express = require("express")
const router = express.Router()
const entrepreneurController = require("../controllers/entrepreneur.controller")
const {jwtControl, clientControl, moderateurControl} = require("../middleware/auth")
const { upload } = require("../middleware/gestionImage")

// route libre
    router.get("/getByName/:name", entrepreneurController.getByName)


// route utilisateur connecté
    router.get("/getById/:id", jwtControl, clientControl, entrepreneurController.getById)
    router.get("/getByUtilisateurId/:id", jwtControl, clientControl, entrepreneurController.getByUtilisateurId)
    router.patch("/updateById/:id", upload.single("image"), entrepreneurController.updateById)
    router.delete("/delete/:id", entrepreneurController.delete)


// route entrepreneur
    //...


// route administration
    router.get("/getAll", jwtControl, moderateurControl, entrepreneurController.getAll)

module.exports = router