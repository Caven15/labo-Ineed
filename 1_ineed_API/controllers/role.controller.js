const dbConnector = require("../tools/dbConnect").get()

// ajoute un role
exports.addRole = (req, res, next) => {
    dbConnector.role.create({role: req.body.role})
    res.write(JSON.stringify({Message :` Role ${req.body.role} ajouté !`}, null, 2))
    res.end()
}

// récupère tout les roles
exports.getAllRole = async (req, res, next) => {
    try {
        const allRole = await dbConnector.role.findAll()
        res.status(200).json(allRole)
    } catch (error) {
        res.json(error)
    }
}

// récupère un role par son id
exports.getById = async (req, res, next) => {
    try {
        const role = await dbConnector.role.findByPk(req.params.id)
        res.status(200).json(role)
    } catch (error) {
        res.json(error)
    }
}

// met a jour un role par son id 
exports.updateById = async (req, res, next) => {
    try {
        const role = await dbConnector.role.findByPk(req.params.id)
        role.update(req.body)
        res.write(JSON.stringify({Message :  `role nr : ${req.params.id} mis a jour avec succès !` }))
        res.end()
    } catch (error) {
        res.json(error)
    }
}

// supprime un role par son id
exports.deleteRole = async (req, res, next) => {
    try {
        const role = await dbConnector.role.destroy({where: {id: req.params.id}})
        if (role) {
            res.write(JSON.stringify({Message :  `role nr : ${req.params.id} a été suprimé avec succès !` }))
            res.end()
        }else{
            res.write(JSON.stringify({Message :  `role nr : ${req.params.id} n'existe pas` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}