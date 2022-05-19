const express = require("express")
const router = express.Router()
const livraisonController = require("../controllers/livraison.controller")

// route libre
    //...


// route utilisateur connecté
    router.post("/add", livraisonController.add)
    router.get("/getById/:id", livraisonController.getById)


// route entrepreneur
    //...


// route administration
    router.get("/getAll", livraisonController.getAll)
    router.patch("/update/:id", livraisonController.update)
    router.delete("/delete/:id", livraisonController.delete)

module.exports = router