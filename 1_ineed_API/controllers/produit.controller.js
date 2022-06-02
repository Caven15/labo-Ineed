const dbConnector = require("../tools/dbConnect").get()
const { Op } = require("sequelize");

// ajoute un nouveau produit
exports.add = async (req, res, next) => {
    try {
        const produit = await dbConnector.produit.findOne({where: {'nom' :req.body.nom}})
        if (produit) {
            return res.status(401).json({message: "le produit existe déja dans le système !"})
        }
        else{
            let newProduit = {
                nom : req.body.nom,
                description : req.body.description,
                prix : req.body.prix,
                quantite : req.body.quantite,
                categorieId : req.body.categorieId,
                entrepreneurId : req.body.entrepreneurId,
                estDisponible : req.body.quantite > 0 ? true : false
            }
            dbConnector.produit.create(newProduit)
                .then(() => {
                    res.status(201).json({message: "le produit a été ajouté avec succès !"})
                })
        }
    } catch (error) {
        console.log()
    }
}

// récupère tout les produit
exports.getAll = async (req, res, next) => {
    try {
        allProduits = await dbConnector.produit.findAll()
        if (allProduits.length < 1) {
            res.status(200).json("la liste des produits est vide...")
        }
        else{
            res.status(200).json(allProduits)
        }
    } catch (error) {
        console.log(error)
    }
}

// récupère tout les produit par leurs id de catégorie
exports.getById = async (req, res, next) => {
    try {
        produit = await dbConnector.produit.findByPk(req.params.id)
        if (!produit) {
            res.status(200).json("le produit n'existe pas...")
        }
        else{
            res.status(200).json(produit)
        }
    } catch (error) {
        console.log(error)
    }
}

// récupère tout les produit par leurs id d'entrepreneur
exports.getByEntrepreneurId = async (req, res, next) => {
    try {
        produit = await dbConnector.produit.findAll({where : {'entrepreneurId' : req.params.entrepreneurId}})
        if (!produit) {
            res.status(200).json("aucun produit trouvé...")
        }
        else{
            res.status(200).json(produit)
        }
    } catch (error) {
        console.log(error)
    }
}

// récupère tout les produit par leurs id de catégorie
exports.getByCategorieId = async (req, res, next) => {
    try {
        produit = await dbConnector.produit.findAll({where : {'categorieId' : req.params.categorieId}})
        if (!produit) {
            res.status(200).json("aucun produit trouvé...")
        }
        else{
            res.status(200).json(produit)
        }
    } catch (error) {
        console.log(error)
    }
}

// récupère une liste de produit contenant une partie du nom
exports.getByName = async (req, res, next) => {
    try {
        produit = await dbConnector.produit.findAll({
            where : {
                nom : {
                    [Op.or]: {
                        [Op.eq]: req.params.name,
                        [Op.substring]: req.params.name,
                        [Op.startsWith]: req.params.name
                    }
                },
            }
        })
        if (!produit) {
            res.status(200).json("aucun produit trouvé...")
        }
        else{
            res.status(200).json(produit)
        }
    } catch (error) {
        console.log(error)
    }
}

// mes a jour un produit par son id
exports.update = async (req, res, next) => {
    try {
        const produit = await dbConnector.produit.findByPk(req.params.id)
        if (produit) {
            produit.update(req.body)
            res.write(JSON.stringify({message : "produit mis a jour avec succès"}))
            res.end()
        }
        else{
            res.write(JSON.stringify({message : "ce produit n'existe pas"}))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

// supprime un produit par son id
exports.delete= async (req, res, next) => {
    try {
        const produit = await dbConnector.produit.destroy({where : {id : req.params.id}})
        if (produit) {
            res.write(JSON.stringify({Message :  `produit nr : ${req.params.id} a été supprimer avec succès !` }))
            res.end()
        }else{
            res.write(JSON.stringify({Message :  `produit nr : ${req.params.id} n'existe pas` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}