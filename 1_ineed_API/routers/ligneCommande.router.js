const express = require("express")
const router = express.Router()
const ligneCommandeController = require("../controllers/ligneCommande.controller")
const {jwtControl, clientControl, moderateurControl} = require("../middleware/auth")

// route libre
    //...


// route utilisateur connecté
    router.post("/add", jwtControl, clientControl, ligneCommandeController.add)
    router.get("/getById/:id", jwtControl, clientControl, ligneCommandeController.getById)
    router.get("/getByCommandeId/:commandeId", jwtControl, clientControl, ligneCommandeController.getByCommandeId)
    router.get("/getByProduitId/:produitId", jwtControl, clientControl, ligneCommandeController.getByProduitId)
    router.patch("/updateById/:id", jwtControl, clientControl, ligneCommandeController.update)
    router.delete("/delete/:id", jwtControl, clientControl, ligneCommandeController.delete)

// route entrepreneur
    //...


// route administration
    router.get("/getAll", jwtControl, moderateurControl, ligneCommandeController.getAll)
    

module.exports = router