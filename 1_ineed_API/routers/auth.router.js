const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const {registerUtilisateur} = require("../controllers/auth.controller")

// route libre
    router.post("/registerClient", authController.registerUtilisateur, authController.registerClient)
    router.post("/registerEntrepreneur", authController.registerEntrepreneur)
    router.post("/login", authController.login)


// route utilisateur connecté
    //...


// route entrepreneur
    //...


// route administration
    //...

module.exports = router