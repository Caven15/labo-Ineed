const express = require("express")
const router = express.Router()
const clientController = require("../controllers/client.controller")

// route libre
    //...


// route utilisateur connecté
    router.get("/getById/:id", clientController.getById)


// route entrepreneur
    //...

    
// route administration
    router.get("/getAll", clientController.getAll)
    router.get("/getByRoleId/:roleId", clientController.getByRoleId)
    router.patch("/updateRoleById/:id", clientController.updateRoleById)


module.exports = router