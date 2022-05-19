const express = require("express")
const router = express.Router()
const livraisonController = require("../controllers/livraison.controller")
const {jwtControl, clientControl, moderateurControl} = require("../middleware/auth")

// route libre
    //...


// route utilisateur connecté
    router.post("/add", jwtControl, clientControl, livraisonController.add)
    router.get("/getById/:id", jwtControl, clientControl, livraisonController.getById)


// route entrepreneur
    //...


// route administration
    router.get("/getAll", jwtControl, moderateurControl, livraisonController.getAll)
    router.patch("/update/:id", jwtControl, moderateurControl, livraisonController.update)
    router.delete("/delete/:id", jwtControl, moderateurControl, livraisonController.delete)

module.exports = router