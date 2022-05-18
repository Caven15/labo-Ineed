const express = require("express")
const router = express.Router()
const commandeController = require("../controllers/commande.controller")

// route libre
    //...


// route utilisateur connecté
    router.post("/add", commandeController.add)
    router.get("/getById/:id", commandeController.getById)


// route entrepreneur
    //...


// route administration
    router.get("/getAll", commandeController.getAll)
    router.get("/getClientById/:id", commandeController.getByClientId)
    router.patch("/updateById/:id", commandeController.updateById)
    router.delete("/delete/:id", commandeController.delete)


module.exports = router