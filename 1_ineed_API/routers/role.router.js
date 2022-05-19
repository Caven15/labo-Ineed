const express = require("express")
const router = express.Router()
const roleController = require("../controllers/role.controller")
const {jwtControl, administrateurControl} = require("../middleware/auth")
// route libre
    //...


// route utilisateur connecté
    //...


// route entrepreneur
    //...

    
// route administration
    router.post("/add", jwtControl, administrateurControl, roleController.addRole)
    router.get("/getAll", jwtControl, administrateurControl, roleController.getAllRole)
    router.get("/getById/:id", jwtControl, administrateurControl, roleController.getById)
    router.patch("/updateById/:id", jwtControl, administrateurControl, roleController.updateById)
    router.delete("/delete/:id", jwtControl, administrateurControl, roleController.deleteRole)


module.exports = router