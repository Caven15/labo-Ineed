const express = require("express")
const router = express.Router()
const roleController = require("../controllers/role.controller")

router.post("/add", roleController.addRole)
router.delete("/delete/:id", roleController.deleteRole)

module.exports = router