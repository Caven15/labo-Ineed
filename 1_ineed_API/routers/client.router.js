const express = require("express")
const router = express.Router()
const clientController = require("../controllers/client.controller")
const {jwtControl, clientControl, moderateurControl} = require("../middleware/auth")

// route libre
    //...


// route utilisateur connecté
    router.get("/getById/:id", clientControl, jwtControl, clientController.getById)


// route entrepreneur
    //...

    
// route administration
    router.get("/getAll", jwtControl, moderateurControl, clientController.getAll)
    router.get("/getByRoleId/:roleId", jwtControl, moderateurControl, clientController.getByRoleId)
    router.patch("/updateRoleById/:id", jwtControl, moderateurControl, clientController.updateRoleById)


module.exports = router