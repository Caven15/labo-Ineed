const dbConnector = require("../tools/dbConnect").get()

// récupère tout les clients
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

// récupère un client par son id
exports.getById = async (req, res, next) => {
    console.log("je passe dans mon get by id")
    try {
        const client = await dbConnector.client.findOne({
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
        res.status(200).json(client)
    } catch (error) {
        res.json(error)
    }
}

// récupère tout les clients par leurs roleId
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

// met a jour un client par son id
exports.update = async (req, res, next) => {
    console.log("je rentre dans mon update")
    try {
        const utilisateur = await dbConnector.utilisateur.findByPk(req.params.id)
        if (utilisateur) {
            utilisateur.update(req.body)
            res.write(JSON.stringify({Message :  `client nr : ${req.params.id} mis a jour avec succès !` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

// met a jour le  role du client par son id
exports.updateRoleById = async (req, res, next) => {
    try {
        const client = await dbConnector.client.findOne({where : {utilisateurId : req.params.id}})
        if (client) {
            client.update(req.body)
            res.write(JSON.stringify({Message :  `client nr : ${req.params.id} mis a jour avec succès !` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

// supprime un utilisateur
    // en raison de sa dépendance le delete est dans la table utilisateur 