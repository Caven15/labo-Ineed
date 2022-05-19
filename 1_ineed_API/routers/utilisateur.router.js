const express = require("express")
const router = express.Router()
const utilisateurController = require("../controllers/utilisateur.controller")

// route libre
    //...


// route utilisateur connecté
    router.delete("/delete/:id", utilisateurController.delete)
    router.patch("/updatePassword/:id", utilisateurController.updatePassword)


// route entrepreneur
    //...

    
// route administration
    //...


module.exports = router