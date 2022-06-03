const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const {jwtControl, clientControl} = require("../middleware/auth")

// route libre
    router.post("/registerClient", authController.registerUtilisateur, authController.registerClient)
    router.post("/login", authController.login)


// route utilisateur connecté
    router.post("/registerEntrepreneur", jwtControl, clientControl, authController.registerEntrepreneur)
    router.post("/refreshToken", authController.refreshToken)


// route entrepreneur
    //...


// route administration
    //...

module.exports = router