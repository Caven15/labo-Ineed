const express = require("express")
const router = express.Router()
const entrepreneurController = require("../controllers/entrepreneur.controller")
const {jwtControl, clientControl, moderateurControl} = require("../middleware/auth")

// route libre
    //...


// route utilisateur connecté
    router.get("/getById/:id", jwtControl, clientControl, entrepreneurController.getById)
    router.get("/getByUtilisateurId/:id", jwtControl, clientControl, entrepreneurController.getByUtilisateurId)
    router.get("/getByName/:name", jwtControl, clientControl, entrepreneurController.getByName)
    router.patch("/updateById/:id", jwtControl, clientControl, entrepreneurController.updateById)
    router.delete("/delete/:id", jwtControl, clientControl, entrepreneurController.delete)


// route entrepreneur
    //...


// route administration
    router.get("/getAll", jwtControl, moderateurControl, entrepreneurController.getAll)

module.exports = router