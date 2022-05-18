const express = require("express")
const router = express.Router()
const produitController = require("../controllers/produit.controller")

// route libre
    //...


// route utilisateur connecté
    //...


// route entrepreneur
    router.post("/add", produitController.add)
    router.get("/getById/:id", produitController.getById)
    router.get("/getByEntrepreneurId/:entrepreneurId", produitController.getByEntrepreneurId)
    router.get("/getByCategorieId/:categorieId", produitController.getByCategorieId)
    router.patch("/updateById/:id", produitController.update)


// route administration
    router.get("/getAll", produitController.getAll)

module.exports = router