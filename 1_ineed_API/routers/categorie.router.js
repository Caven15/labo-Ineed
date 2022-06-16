const express = require("express")
const router = express.Router()
const categorieController = require("../controllers/categorie.controller")
const {jwtControl, clientControl, moderateurControl} = require("../middleware/auth")
const { addImage } = require("../middleware/gestionImage")

// route libre
    router.get("/getAll", categorieController.getAllCategorie)

    
// route utilisateur connecté
    router.get("/getById/:id", categorieController.getCategorieById)
    router.patch("/:id", jwtControl, categorieController.updateCategorie)
    router.delete("/:id", jwtControl, categorieController.deleteCategorie)


// route entrepreneur
    //...


// route administration
    router.post("/add", addImage, categorieController.addCategorie)
    router.get("/getByCategorie/:categorie", jwtControl, moderateurControl, categorieController.getCategorieByName)

module.exports = router