const express = require("express")
const router = express.Router()
const produitController = require("../controllers/produit.controller")
const {jwtControl, clientControl, entrepreneurControl} = require("../middleware/auth")

// route libre
    //...


// route utilisateur connecté
    router.get("/getById/:id", jwtControl, clientControl, produitController.getById)
    router.get("/getByEntrepreneurId/:entrepreneurId", jwtControl, clientControl, produitController.getByEntrepreneurId)
    router.get("/getByCategorieId/:categorieId", jwtControl, clientControl, produitController.getByCategorieId)
    router.get("/getAll", jwtControl, clientControl, produitController.getAll)


// route entrepreneur
    router.post("/add", jwtControl, entrepreneurControl, produitController.add)
    router.patch("/updateById/:id", jwtControl,  entrepreneurControl, produitController.update)


// route administration
    //...

module.exports = router