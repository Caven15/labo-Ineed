const express = require("express")
const router = express.Router()
const entrepreneurController = require("../controllers/entrepreneur.controller")

// route libre
    //...


// route utilisateur connecté
    router.get("/getById/:id", entrepreneurController.getById)
    router.patch("/updateById/:id", entrepreneurController.updateById)
    router.delete("/delete/:id", entrepreneurController.delete)


// route entrepreneur
    //...


// route administration
    router.get("/getAll", entrepreneurController.getAll)

module.exports = router