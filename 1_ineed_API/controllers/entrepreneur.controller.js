const dbConnector = require("../tools/dbConnect").get()

// récupère tout les entrepreneurs
exports.getAll = async (req, res, next) => {
    try {
        const allEntrepreneurs = await dbConnector.entrepreneur.findAll()
        res.status(200).json(allEntrepreneurs)
    } catch (error) {
        res.json(error)
    }
}

// récupère un entrepreneur par son id
exports.getById = async (req, res, next) => {
    try {
        const allEntrepreneurs = await dbConnector.entrepreneur.findByPk(req.params.id)
        res.status(200).json(allEntrepreneurs)
    } catch (error) {
        res.json(error)
    }
}

// met a jour un entrepreneur par son id
exports.updateById = async (req, res, next) => {
    const entrepreneur = await dbConnector.entrepreneur.findByPk(req.params.id)
    // console.log(entrepreneur)
    if (entrepreneur == null) {
        res.json(`entrepreneur nr : ${req.params.id} n'existe pas !`)
    }
    else{
        entrepreneur.update(req.body)
        res.write(JSON.stringify({Message :  `entrepreneur nr : ${req.params.id} mis a jour avec succès !` }))
        res.end()
    }
}

// supprime un entrepreneur par son id
exports.delete = async (req, res, next) => {
    try {
        const entrepreneur = await dbConnector.entrepreneur.destroy({where : {id : req.params.id}})
        if (entrepreneur) {
            res.write(JSON.stringify({Message :  `entrepreneur nr : ${req.params.id} a été suprimer avec succès !` }))
            res.end()
        }else{
            res.write(JSON.stringify({Message :  `entrepreneur nr : ${req.params.id} n'existe pas` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}