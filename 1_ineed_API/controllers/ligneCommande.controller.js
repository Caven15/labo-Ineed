const dbConnector = require("../tools/dbConnect").get()

// ajoute une nouvelle ligne de commande
exports.add = async (req, res, next) => {
    try {
        let newLigneCommande = {
            quantite : req.body.quantite,
            prix : req.body.prix,
            commandeId : req.body.commandeId,
            produitId : req.body.produitId
        }
        dbConnector.ligneCommande.create(newLigneCommande)
            .then(() => {
                res.status(201).json({message: "la ligneCommande a été ajouté avec succès !"})
            })
    } catch (error) {
        console.log()
    }
}


// récupère toute les ligne de commandes
exports.getAll = async (req, res, next) => {
    try {
        allLigneCommandes = await dbConnector.ligneCommande.findAll()
        if (allLigneCommandes.length < 1) {
            res.status(200).json("la liste des ligneCommandes est vide...")
        }
        else{
            res.status(200).json(allLigneCommandes)
        }
    } catch (error) {
        console.log(error)
    }
}


// récupère une ligne de commande par son id
exports.getById = async (req, res, next) => {
    try {
        ligneCommande = await dbConnector.ligneCommande.findByPk(req.params.id)
        if (!ligneCommande) {
            res.status(200).json("la ligneCommande n'existe pas...")
        }
        else{
            res.status(200).json(ligneCommande)
        }
    } catch (error) {
        console.log(error)
    }
}


// récupère toute le commande par le id de commande
exports.getByCommandeId = async (req, res, next) => {
    try {
        ligneCommande = await dbConnector.ligneCommande.findAll({where : { "commandeId" : req.params.commandeId}})
        if (!ligneCommande) {
            res.status(200).json("aucune ligne de comamnde trouvée...")
        }
        else{
            res.status(200).json(ligneCommande)
        }
    } catch (error) {
        console.log(error)
    }
}


// récupère toute les commande par leeur id de produit
exports.getByProduitId = async (req, res, next) => {
    try {
        ligneCommande = await dbConnector.ligneCommande.findAll({where : { "produitId" : req.params.produitId}})
        if (!ligneCommande) {
            res.status(200).json("aucune ligne de comamnde trouvée...")
        }
        else{
            res.status(200).json(ligneCommande)
        }
    } catch (error) {
        console.log(error)
    }
}


// met a jour une ligne de commande par son id
exports.update = async (req, res, next) => {
    try {
        const ligneCommande = await dbConnector.ligneCommande.findByPk(req.params.id)
        if (ligneCommande) {
            ligneCommande.update(req.body)
            res.write(JSON.stringify({message : "ligneCommande mis a jour avec succès"}))
            res.end()
        }
        else{
            res.write(JSON.stringify({message : "la ligneCommande n'existe pas"}))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

// supprime une lige de commande par son id
exports.delete= async (req, res, next) => {
    try {
        const ligneCommande = await dbConnector.ligneCommande.destroy({where : {id : req.params.id}})
        if (ligneCommande) {
            res.write(JSON.stringify({Message :  `ligneCommande nr : ${req.params.id} a été supprimer avec succès !` }))
            res.end()
        }else{
            res.write(JSON.stringify({Message :  `ligneCommande nr : ${req.params.id} n'existe pas` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}