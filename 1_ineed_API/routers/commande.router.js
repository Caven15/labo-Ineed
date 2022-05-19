const express = require("express")
const router = express.Router()
const commandeController = require("../controllers/commande.controller")
const {jwtControl, clientControl, moderateurControl} = require("../middleware/auth")


// route libre
    //...


// route utilisateur connecté
    router.post("/add", jwtControl, clientControl, commandeController.add)
    router.get("/getById/:id", jwtControl, clientControl, commandeController.getById)


// route entrepreneur
    //...


// route administration
    router.get("/getAll", jwtControl, moderateurControl, commandeController.getAll)
    router.get("/getClientById/:id", jwtControl, moderateurControl, commandeController.getByClientId)
    router.patch("/updateById/:id", jwtControl, moderateurControl, commandeController.updateById)
    router.delete("/delete/:id", jwtControl, moderateurControl, commandeController.delete)


module.exports = router