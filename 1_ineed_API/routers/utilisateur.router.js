const express = require("express")
const router = express.Router()
const utilisateurController = require("../controllers/utilisateur.controller")
const {jwtControl, clientControl} = require("../middleware/auth")

// route libre
    //...


// route utilisateur connecté
    router.delete("/delete/:id", jwtControl, clientControl, utilisateurController.delete)
    router.patch("/updatePassword/:id", jwtControl, clientControl, utilisateurController.updatePassword)


// route entrepreneur
    //...

    
// route administration
    //...


module.exports = router