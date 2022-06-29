const express = require("express")
const router = express.Router()
const clientController = require("../controllers/client.controller")
const {jwtControl, clientControl, moderateurControl} = require("../middleware/auth")
const { upload } = require("../tools/multerConfig")

// route libre
    //...


// route utilisateur connecté
    router.get("/getById/:id", jwtControl, clientControl, clientController.getById)
    router.patch("/updateById/:id", jwtControl, clientControl, upload.single("image"), clientController.update)


// route entrepreneur
    //...

    
// route administration
    router.get("/getAll", jwtControl, moderateurControl, clientController.getAll)
    router.get("/getByRoleId/:roleId", jwtControl, moderateurControl, clientController.getByRoleId)
    router.patch("/updateRoleById/:id", jwtControl, clientController.updateRoleById)


module.exports = router