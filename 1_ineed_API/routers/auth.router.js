const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const {registerUtilisateur} = require("../controllers/auth.controller")

// définitions des routes concernant l'authentification 

router.post("/registerClient", authController.registerUtilisateur, authController.registerClient)
router.post("/registerEntrepreneur", authController.registerEntrepreneur)
router.post("/login", authController.login)

module.exports = router