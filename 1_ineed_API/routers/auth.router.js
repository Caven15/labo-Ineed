const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const {jwtControl, clientControl} = require("../middleware/auth")
const { upload } = require("../tools/multerConfig")

// route libre
    router.post("/registerClient", upload.single("image"), authController.registerUtilisateur, authController.registerClient)
    router.post("/login", authController.login)


// route utilisateur connecté
    router.post("/registerEntrepreneur", upload.single("image"), authController.registerEntrepreneur)
    router.post("/refreshToken", authController.refreshToken)


// route entrepreneur
    //...


// route administration
    //...

module.exports = router