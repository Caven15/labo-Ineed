const dbConnector = require("../tools/dbConnect").get()

// getAll
exports.getAll = async (req, res, next) => {
    try {
        const allClients = await dbConnector.client.findAll({
            attributes: {
                exclude: ['utilisateurId']
            },
            include: [
                {
                    model : dbConnector.utilisateur,
                    attributes: [
                        'nom', 
                        'prenom', 
                        'dateNaissance', 
                        'numeroRue', 
                        'rue',
                        'ville',
                        'codePostal',
                        'email'
                    ]
                }
            ]
        })
        res.status(200).json(allClients)
    } catch (error) {
        res.json(error)
    }
}

// getById
exports.getById = async (req, res, next) => {
    try {
        const allClients = await dbConnector.client.findOne({
            where: {
                id: req.params.id
            },
            attributes: {
                exclude: ['utilisateurId']
            },
            include: [
                {
                    model : dbConnector.utilisateur,
                    attributes: [
                        'nom', 
                        'prenom', 
                        'dateNaissance', 
                        'numeroRue', 
                        'rue',
                        'ville',
                        'codePostal',
                        'email'
                    ]
                }
            ]
        })
        res.status(200).json(allClients)
    } catch (error) {
        res.json(error)
    }
}

// updateByRoleId
exports.getByRoleId = async (req, res, next) => {
    try {
        const allClients = await dbConnector.client.findAll({
            where: {
                roleId: req.params.roleId
            },
            attributes: {
                exclude: ['utilisateurId']
            },
            include: [
                {
                    model : dbConnector.utilisateur,
                    attributes: [
                        'nom', 
                        'prenom', 
                        'dateNaissance', 
                        'numeroRue', 
                        'rue',
                        'ville',
                        'codePostal',
                        'email'
                    ]
                }
            ]
        })
        res.status(200).json(allClients)
    } catch (error) {
        res.json(error)
    }
}

// updateById
exports.updateRoleById = async (req, res, next) => {
    try {
        const client = await dbConnector.client.findByPk(req.params.id)
        if (client) {
            client.update(req.body)
            res.write(JSON.stringify({Message :  `client nr : ${req.params.id} mis a jour avec succès !` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

// delete
    // en raison de sa dépendance je vais gerer le delete dans la table utilisateur et je supprimerai ensuite l'instance de la table enfant