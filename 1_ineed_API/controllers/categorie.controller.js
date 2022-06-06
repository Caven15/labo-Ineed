const dbConnector = require("../tools/dbConnect").get()

// ajoute une nouvelle catégorie
exports.addCategorie = async (req, res, next) => {
    try {
        const categorie = await dbConnector.categorie.findOne({where: {'categorie' :req.body.categorie}})
        if (categorie) {
            return res.status(403).json({message: "la catégorie existe déja dans le système !"})
        }
        else{
            let newCategorie = {
                categorie : req.body.categorie
            }
            dbConnector.categorie.create(newCategorie)
                .then((response) => {
                    res.status(201).json({message: "la catégorie a été ajouté avec succès !"})
                })
        }
    } catch (error) {
        console.log(error)
    }
}

// récupère toute les catégorie
exports.getAllCategorie = async (req, res, next) => {
    try {
        allCategories = await dbConnector.categorie.findAll()
        if (allCategories.length < 1) {
            res.status(200).json("la liste des catégories est vide...")
        }
        else{
            res.status(200).json(allCategories)
        }
    } catch (error) {
        console.log(error)
    }
}

// récupère une catégorie par son id 
exports.getCategorieById = async (req, res, next) => {
    try {
        let categorie = await dbConnector.categorie.findByPk(req.params.id)
        res.json(categorie)
    } catch (error) {
        res.json(error)
    }
}

// récupère une catégorie par son nom
exports.getCategorieByName = async (req, res, next) => {
    try {
        let categorie = await dbConnector.categorie.findAll({ where: { categorie: req.params.categorie } })
        res.json(categorie)
    } catch (error) {
        console.log(error)
    }
}

// met a jour une catégorie par son id
exports.updateCategorie = async (req, res, next) => {
    try {
        const categorie = await dbConnector.categorie.findByPk(req.params.id)
        if (categorie) {
            categorie.update(req.body)
            res.write(JSON.stringify({message : "catégorie mis a jour avec succès"}))
            res.end()
        }
        else{
            res.write(JSON.stringify({message : "cette catégorie n'existe pas"}))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

// supprime une catégorie par son id 
exports.deleteCategorie = async (req, res, next) => {
    try {
        const categorie = await dbConnector.categorie.destroy({where : {id : req.params.id}})
        if (categorie) {
            res.write(JSON.stringify({Message :  `catégorie nr : ${req.params.id} a été suprimer avec succès !` }))
            res.end()
        }else{
            res.write(JSON.stringify({Message :  `catégorie nr : ${req.params.id} n'existe pas` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

