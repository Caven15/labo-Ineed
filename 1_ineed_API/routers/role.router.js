const express = require("express")
const router = express.Router()
const roleController = require("../controllers/role.controller")

// route libre
    //...


// route utilisateur connecté
    //...


// route entrepreneur
    //...

    
// route administration
    router.post("/add", roleController.addRole)
    router.get("/getAll", roleController.getAllRole)
    router.get("/getById/:id", roleController.getById)
    router.patch("/updateById/:id", roleController.updateById)
    router.delete("/delete/:id", roleController.deleteRole)


module.exports = router