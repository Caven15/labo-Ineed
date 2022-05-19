const express = require("express")
const router = express.Router()
const ligneCommandeController = require("../controllers/ligneCommande.controller")

// route libre
    //...


// route utilisateur connecté
    router.post("/add", ligneCommandeController.add)
    router.get("/getById/:id", ligneCommandeController.getById)
    router.get("/getByCommandeId/:commandeId", ligneCommandeController.getByCommandeId)
    router.get("/getByProduitId/:produitId", ligneCommandeController.getByProduitId)
    router.patch("/updateById/:id", ligneCommandeController.update)
    router.delete("/delete/:id", ligneCommandeController.delete)

// route entrepreneur
    //...


// route administration
    router.get("/getAll", ligneCommandeController.getAll)
    

module.exports = router