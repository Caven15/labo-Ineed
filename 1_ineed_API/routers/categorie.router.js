const express = require("express")
const router = express.Router()
const categorieController = require("../controllers/categorie.controller")

// route libre
    //...

    
// route utilisateur connecté
    router.get("/getById/:id", categorieController.getCategorieById)
    router.patch("/:id", categorieController.updateCategorie)
    router.delete("/:id", categorieController.deleteCategorie)


// route entrepreneur
    //...


// route administration
    router.post("/add", categorieController.addCategorie)
    router.get("/getAll", categorieController.getAllCategorie)
    router.get("/getByCategorie/:categorie", categorieController.getCategorieByName)

module.exports = router