const express = require("express")
const router = express.Router()
const categorieController = require("../controllers/categorie.controller")
const {jwtControl, clientControl, moderateurControl} = require("../middleware/auth")
const { upload } = require("../tools/multerConfig")

// route libre
    router.get("/getAll", categorieController.getAllCategorie)
    router.get("/getById/:id", categorieController.getCategorieById)
    
// route utilisateur connecté
    //...


// route entrepreneur
    //...


// route administration
    router.post("/add", upload.single("image"), jwtControl, moderateurControl, categorieController.addCategorie)
    router.get("/getByCategorie/:categorie", jwtControl, moderateurControl, categorieController.getCategorieByName)
    router.patch("/:id", upload.single("image"), jwtControl, moderateurControl, categorieController.updateCategorie)
    router.delete("/:id", jwtControl, moderateurControl, categorieController.deleteCategorie)

module.exports = router