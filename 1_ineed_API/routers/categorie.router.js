const express = require("express")
const router = express.Router()
const categorieController = require("../controllers/categorie.controller")
const {jwtControl, clientControl, moderateurControl} = require("../middleware/auth")
const { upload } = require("../tools/multerConfig")

// route libre
    router.get("/getAll", categorieController.getAllCategorie)

    
// route utilisateur connecté
    router.get("/getById/:id", categorieController.getCategorieById)
    router.patch("/:id", upload.single("image"), categorieController.updateCategorie)
    router.delete("/:id", categorieController.deleteCategorie)


// route entrepreneur
    //...


// route administration
    router.post("/add", upload.single("image"), categorieController.addCategorie)
    router.get("/getByCategorie/:categorie", jwtControl, moderateurControl, categorieController.getCategorieByName)

module.exports = router