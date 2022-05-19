const dbConnector = require("../tools/dbConnect").get()

// ajoute une nouvelle commande
exports.add = async (req, res, next) => {
    try {
        let newCommande = {
            prix: req.body.prix,
            clientId: req.body.clientId
        }
        console.log(newCommande)
        dbConnector.commande.create(newCommande)
            .then(() => {
                res.status(201).json({ message: "la commande a été ajouté avec succès !" })
            })
    } catch (error) {
        console.log()
    }
}

// récupère toute les commandes
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

// récupère une commande par son id
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

// récupère toutes les commande par l'id client
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

// met a jour une commande par son id
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

// supprimme une commande par son id
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

