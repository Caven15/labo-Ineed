const { uid } = require("uid")
const dbConnector = require("../tools/dbConnect").get()
const fs = require('fs')

// ajoute une nouvelle catégorie
exports.addCategorie = async (req, res, next) => {
    try {
        // si la requete contient un body et un fichier
            if (req.body.nom && req.file) {
                const newCategorie = await dbConnector.categorie.findOne({where: {'nom' :req.body.nom}})
                if (newCategorie) {
                    fs.unlink(`./uploads/${req.file.filename}`, (err) => {
                        if (err){
                            console.log(err)
                        }
                        else{
                            console.log('image supprimé avec succès')
                        }
                        
                    })
                    return res.status(403).json({message: "la catégorie existe déja dans le système !"})
                }
                else{
                    // création d'une nouvelle catégorie
                        let newCategorieModel = {
                            nom : req.body.nom
                        }
                        dbConnector.categorie.create(newCategorieModel).then((result) => {
                            // création d'une image catégorie
                                let newImageCategorie = {
                                    nomC : req.file.originalname,
                                    uid : req.file.filename,
                                    categorieId : result.id
                                }
                                dbConnector.imageCategorie.create(newImageCategorie).then((result) => {
                                    // update de la catégorie pour lié l'id de l'image
                                        dbConnector.categorie.update(
                                            {
                                                imageId: result.id,
                                            },
                                            {
                                                where: { id: result.categorieId },
                                            }
                                        ).then(() => {
                                            res.status(201).json({message: "l'imageCatégorie et la catégorie ont été ajouté avec succès !"})
                                        })
                                })
                        })
                }
            }
            // si le file est undefined
                else{
                    // on enregistre uniquement le nom de la catégorie
                        if (req.body.nom) {
                            const newCategorie = await dbConnector.categorie.findOne({where: {'nom' :req.body.nom}})
                            if (newCategorie) {
                                return res.status(403).json({message: "la catégorie existe déja dans le système !"})
                            }
                            else{
                                let newCategorieModdel = {
                                    nom : req.body.nom
                                }
                                dbConnector.categorie.create(newCategorieModdel)
                                .then(() => {
                                    res.status(201).json({message: "la catégorie a été ajouté avec succès !"})
                                })
                            }
                        }
                }
    } catch (error) {
        console.log(error)
    }
}

// récupère toute les catégories
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
        let categorie = await dbConnector.categorie.findOne({
            where : {
                id : req.params.id
            },
            attributes: {
                exclude: ['imageId']
            },
            include : [{
                model : dbConnector.imageCategorie,
                attributes: {
                    exclude: ['categorieId']
                },
            }]
        })
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
        if (req.body.nom && req.file) {
            const categorie = await dbConnector.categorie.findByPk(req.params.id)
            if (categorie) {
                const imageCategorie = await dbConnector.imageCategorie.findOne({ where: { categorieId: categorie.id } })
                let updateImageCategorie = {
                    nomC : req.file.originalname,
                    uid : req.file.filename,
                    categorieId : categorie.id
                }
                if (!imageCategorie) {
                    dbConnector.imageCategorie.create(updateImageCategorie)
                }
                else{
                    let nomFichier = imageCategorie.uid
                    fs.unlink(`./uploads/${nomFichier}`, (err) => {
                        if (err){
                            console.log(err)
                        }
                        else{
                            console.log('image supprimé avec succès')
                        }
                        
                    })
                    imageCategorie.update(updateImageCategorie)
                }
                categorie.update(req.body)
                res.write(JSON.stringify({message : "catégorie et image mis a jour avec succès"}))
                res.end()
            }
            else{
                res.write(JSON.stringify({message : "cette catégorie n'existe pas"}))
                res.end()
            }
        }
        else{
            if (req.body.nom) {
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
            }
            if (req.file) {
                const imageCategorie = await dbConnector.imageCategorie.findOne({ where: { categorieId: req.params.id } })
                let updateImageCategorie = {
                    nomC : req.file.originalname,
                    uid : req.file.filename,
                    categorieId : req.params.id
                }
                if (!imageCategorie) {
                    dbConnector.imageCategorie.create(updateImageCategorie).then(() => {
                        res.status(201).json({message: "image ajouté avec succès !"})
                    })
                }
                else{
                    let nomFichier = imageCategorie.uid
                    fs.unlink(`./uploads/${nomFichier}`, (err) => {
                        if (err){
                            console.log(err)
                        }
                        else{
                            console.log('image supprimé avec succès')
                        }
                        
                    })
                    imageCategorie.update(updateImageCategorie)
                    res.write(JSON.stringify({message : "image mise a jour avec succès !"}))
                    res.end()
                }
            }
        }

    } catch (error) {
        res.json(error)
    }
}

// supprime une catégorie par son id 
exports.deleteCategorie = async (req, res, next) => {
    try {
        const categorie = await dbConnector.categorie.findOne({where : {id : req.params.id}})
        if (categorie) {
            const imageCategorie = await dbConnector.imageCategorie.findByPk(categorie.imageId)
            if (imageCategorie) {
                fs.unlink(`./uploads/${imageCategorie.uid}`, (err) => {
                    if (err){
                        console.log(err)
                    }
                    else{
                        console.log(`image supprimé avec succès`)
                    }
                    
                })
                dbConnector.imageCategorie.destroy({where : {id : categorie.imageId}})
            }
            dbConnector.categorie.destroy({where : {id : req.params.id}})
            res.write(JSON.stringify({Message :  `catégorie nr : ${req.params.id} a été suprimer avec succès !` }))
            res.end()
        }
        else{
            res.write(JSON.stringify({Message :  `catégorie nr : ${req.params.id} n'existe pas` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}