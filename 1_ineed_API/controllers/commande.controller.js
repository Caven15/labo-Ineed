const dbConnector = require("../tools/dbConnect").get()

// add
exports.add = async (req, res, next) => {
    try {
        let newCommande = {
            prix: req.body.prix,
            clientId: req.body.clientId
        }
        dbConnector.commande.create(newCommande)
            .then(() => {
                res.status(201).json({ message: "le commande a été ajouté avec succès !" })
            })
    } catch (error) {
        console.log()
    }
}

// getAll
exports.getAll = async (req, res, next) => {
    try {
        allCommande = await dbConnector.commande.findAll({
            include: [
                {
                    model: dbConnector.ligneCommande,
                    attributes: {
                        exclude: ['commandeId']
                    },
                }
            ]
        })
        if (allCommande.length < 1) {
            res.status(200).json("la liste des commandes est vide...")
        }
        else {
            res.status(200).json(allCommande)
        }
    } catch (error) {
        console.log(error)
    }
}

// getById
exports.getById = async (req, res, next) => {
    try {
        commande = await dbConnector.commande.findOne({
            where : {
                "id" : req.params.id
            },
            include: [
                {
                    model: dbConnector.ligneCommande,
                    attributes: {
                        exclude: ['commandeId']
                    },
                }
            ]
        })
        if (!commande) {
            res.status(200).json("le commande n'existe pas...")
        }
        else {
            res.status(200).json(commande)
        }
    } catch (error) {
        console.log(error)
    }
}

// getByClientId
exports.getByClientId = async (req, res, next) => {
    try {
        commande = await dbConnector.commande.findAll({
            where : {
                "clientId" : req.params.id
            },
            include: [
                {
                    model: dbConnector.ligneCommande,
                    attributes: {
                        exclude: ['commandeId']
                    },
                }
            ]
        })
        if (!commande) {
            res.status(200).json("le commande n'existe pas...")
        }
        else {
            res.status(200).json(commande)
        }
    } catch (error) {
        console.log(error)
    }
}
// updateById
exports.updateById = async (req, res, next) => {
    try {
        const commande = await dbConnector.commande.findByPk(req.params.id)
        if (commande) {
            commande.update(req.body)
            res.write(JSON.stringify({Message :  `commande nr : ${req.params.id} mis a jour avec succès !` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

// delete
exports.delete = async (req, res, next) => {
    try {
        const commande = await dbConnector.commande.destroy({where : {id : req.params.id}})
        if (commande) {
            res.write(JSON.stringify({Message :  `commande nr : ${req.params.id} a été suprimer avec succès !` }))
            res.end()
        }else{
            res.write(JSON.stringify({Message :  `commande nr : ${req.params.id} n'existe pas` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

