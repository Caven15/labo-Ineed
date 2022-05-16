const dbConnector = require("../tools/dbConnect").get()

// ajoute un role
exports.addRole = (req, res, next) => {
    dbConnector.role.create({role: req.body.role})
    res.write(JSON.stringify({Message :  `${req.body.role} ajouté !`}, null, 2))
    req.end()
}

// supprime un role
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