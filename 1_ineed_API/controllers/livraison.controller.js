const dbConnector = require("../tools/dbConnect").get()

// ajoute une nouvelle livraison
exports.add = async (req, res, next) => {
    try {
        const livraison = await dbConnector.livraison.findOne({where: {'commandeId' :req.body.commandeId}})
        if (livraison) {
            return res.status(401).json({message: "la livraison existe déja dans le système !"})
        }
        else{
            let newLivraison = {
                numeroRueL : req.body.numeroRueL,
                rueL : req.body.rueL,
                villeL : req.body.villeL,
                codePostalL : req.body.codePostalL,
                commandeId : req.body.commandeId,
                estLivre : false
            }
            dbConnector.livraison.create(newLivraison)
                .then(() => {
                    res.status(201).json({message: "la livraison a été ajouté avec succès !"})
                })
        }
    } catch (error) {
        console.log()
    }
}

// récupère toute les livraison
exports.getAll = async (req, res, next) => {
    try {
        allLivraison = await dbConnector.livraison.findAll()
        if (allLivraison.length < 1) {
            res.status(200).json("la liste des livraison est vide...")
        }
        else{
            res.status(200).json(allLivraison)
        }
    } catch (error) {
        console.log(error)
    }
}

// récupère une livraison par son id
exports.getById = async (req, res, next) => {
    try {
        livraison = await dbConnector.livraison.findByPk(req.params.id)
        if (!livraison) {
            res.status(200).json("la livraison n'existe pas...")
        }
        else{
            res.status(200).json(livraison)
        }
    } catch (error) {
        console.log(error)
    }
}

// met a jour une livraison par son id 
exports.update = async (req, res, next) => {
    try {
        const livraison = await dbConnector.livraison.findByPk(req.params.id)
        if (livraison) {
            livraison.update(req.body)
            res.write(JSON.stringify({message : "livraison mis a jour avec succès"}))
            res.end()
        }
        else{
            res.write(JSON.stringify({message : "cette livraison n'existe pas"}))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

// supprime une livraison par son id 
exports.delete= async (req, res, next) => {
    try {
        const livraison = await dbConnector.livraison.destroy({where : {id : req.params.id}})
        if (livraison) {
            res.write(JSON.stringify({Message :  `livraison nr : ${req.params.id} a été suprimer avec succès !` }))
            res.end()
        }else{
            res.write(JSON.stringify({Message :  `livraison nr : ${req.params.id} n'existe pas` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}