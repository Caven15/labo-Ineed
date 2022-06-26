const dbConnector = require("../tools/dbConnect").get()
const fs = require('fs')

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
        const client = await dbConnector.utilisateur.findOne({
            where: {
                id: req.params.id
            },
            attributes: {
                exclude: ['imageId']
            },
            include: [
                {
                    model : dbConnector.client,
                    attributes: {
                        exclude: ['utilisateurId']
                    },
                },
                {
                    model : dbConnector.imageUtilisateur,
                    attributes: {
                        exclude: ['utilisateurId']
                    },
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
    console.log("-------------------------")
    console.log("je rentre dans mon update")
    console.log("-------------------------")
    try {
        if (req.body&& req.file) {
            console.log("req.body.nom && req.file")
            const utilisateur = await dbConnector.utilisateur.findByPk(req.params.id)
            if (utilisateur) {
                const imageUtilisateur = await dbConnector.imageUtilisateur.findOne({ where: { utilisateurId: utilisateur.id } })
                let updateImageUtilisateur = {
                    nomU : req.file.originalname,
                    uid : req.file.filename,
                    utilisateurId : utilisateur.id
                }
                if (!imageUtilisateur) {
                    dbConnector.imageutilisateur.create(updateImageUtilisateur)
                }
                else{
                    let nomFichier = imageUtilisateur.uid
                    fs.unlink(`./uploads/${nomFichier}`, (err) => {
                        if (err){
                            console.log(err)
                        }
                        else{
                            console.log('image supprimé avec succès')
                        }
                        
                    })
                    imageUtilisateur.update(updateImageUtilisateur)
                }
                utilisateur.update(req.body)
                res.write(JSON.stringify({message : "utilisateur et image mis a jour avec succès"}))
                res.end()
            }
            else{
                res.write(JSON.stringify({message : "cette utilisateur n'existe pas"}))
                res.end()
            }
        }
        else{
            if (req.body) {
                console.log("req.body.nom")
                const utilisateur = await dbConnector.utilisateur.findByPk(req.params.id)
                if (utilisateur) {
                    utilisateur.update(req.body)
                    res.write(JSON.stringify({Message :  `client nr : ${req.params.id} mis a jour avec succès !` }))
                    res.end()
                }
                else{
                    res.write(JSON.stringify({message : "cette utilisateur n'existe pas"}))
                    res.end()
                }
            }
            if (req.file) {
                console.log("je rentre dans mon file uniquement")
                const utilisateur = await dbConnector.utilisateur.findByPk(req.params.id)
                if (utilisateur) {
                    const imageUtilisateur = await dbConnector.imageUtilisateur.findOne({ where: { utilisateurId: utilisateur.id } })
                    let updateImageUtilisateur = {
                        nomU : req.file.originalname,
                        uid : req.file.filename,
                        utilisateurId : utilisateur.id
                    }
                    console.log(updateImageUtilisateur)
                    if (!imageUtilisateur) {
                        dbConnector.imageUtilisateur.create(updateImageUtilisateur)
                    }
                    else{
                        let nomFichier = imageUtilisateur.uid
                        fs.unlink(`./uploads/${nomFichier}`, (err) => {
                            if (err){
                                console.log(err)
                            }
                            else{
                                console.log('image supprimé avec succès')
                            }
                            
                        })
                        imageUtilisateur.update(updateImageUtilisateur)
                        res.write(JSON.stringify({message : "image mise a jour avec succès !"}))
                        res.end()
                    }
                }
                else{
                    res.write(JSON.stringify({message : "cette utilisateur n'existe pas"}))
                    res.end()
                }
                
            }
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
            res.write(JSON.stringify({Message :  `role du client nr : ${req.params.id} mis a jour avec succès !` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

// supprime un utilisateur
    // en raison de sa dépendance le delete est dans la table utilisateur 