const dbConnector = require("../tools/dbConnect").get()
const { Op } = require("sequelize");
const fs = require('fs')

// récupère tout les entrepreneurs
exports.getAll = async (req, res, next) => {
    try {
        const allEntrepreneurs = await dbConnector.entrepreneur.findAll()
        res.status(200).json(allEntrepreneurs)
    } catch (error) {
        res.json(error)
    }
}

// récupère un entrepreneur par son id
exports.getById = async (req, res, next) => {
    try {
        const entrepreneur = await dbConnector.entrepreneur.findOne({
            where: {
                id: req.params.id
            },
            attributes: {
                exclude: ['imageId']
            },
            include: [
                {
                    model : dbConnector.imageEntrepreneur,
                    attributes: {
                        exclude: ['entrepreneurId']
                    },
                }
            ]
        })
        res.status(200).json(entrepreneur)
    } catch (error) {
        res.json(error)
    }
}

// récupère un entrepreneur par son id utilisateur
exports.getByUtilisateurId = async (req, res, next) => {
    try {
        const entrepreneur = await dbConnector.entrepreneur.findOne({
            where : {
                utilisateurId : req.params.id
            },
            attributes: {
                exclude: ['imageId']
            },
            include: [
                {
                    model : dbConnector.imageEntrepreneur,
                    attributes: {
                        exclude: ['entrepreneurId']
                    },
                }
            ]
        })
        res.status(200).json(entrepreneur)
    } catch (error) {
        res.json(error)
    }
}

// récupère une liste d'entrepreneur contenant une partie du nom
exports.getByName = async (req, res, next) => {
    try {
        entrepreneur = await dbConnector.entrepreneur.findAll({
            where : {
                nomE : {
                    [Op.substring]: req.params.name
                }
            }
        })
        if (!entrepreneur) {
            res.status(200).json([])
        }
        else{
            res.status(200).json(entrepreneur)
        }
    } catch (error) {
        console.log(error)
    }
}



// met a jour un entrepreneur par son id
exports.updateById = async (req, res, next) => {
    try {
        if (req.body.nomE && req.file) {
            console.log("req.body.nom && req.file")
            const entrepreneur = await dbConnector.entrepreneur.findByPk(req.params.id)
            if (entrepreneur) {
                console.log("entrepreneur")
                const imageEntrepreneur = await dbConnector.imageEntrepreneur.findOne({ where: { entrepreneurId: entrepreneur.id } })
                console.log("imageEntrepreneur : ", imageEntrepreneur)
                let updateImageEntrepreneur = {
                    nomE : req.file.originalname,
                    uid : req.file.filename,
                    entrepreneurId : entrepreneur.id
                }
                if (!imageEntrepreneur) {
                    dbConnector.imageEntrepreneur.create(updateImageEntrepreneur)
                }
                else{
                    let nomFichier = imageEntrepreneur.uid
                    fs.unlink(`./uploads/${nomFichier}`, (err) => {
                        if (err){
                            console.log(err)
                        }
                        else{
                            console.log('image supprimé avec succès')
                        }
                        
                    })
                    imageEntrepreneur.update(updateImageEntrepreneur)
                }
                entrepreneur.update(req.body)
                res.write(JSON.stringify({message : "entrepreneur et image mis a jour avec succès"}))
                res.end()
            }
            else{
                res.write(JSON.stringify({message : "cette entrepreneur n'existe pas"}))
                res.end()
            }
        }
        else{
            if (req.body.nomE) {
                const entrepreneur = await dbConnector.entrepreneur.findByPk(req.params.id)
                if (entrepreneur) {
                    categorie.update(req.body)
                    res.write(JSON.stringify({message : "entrepreneur mis a jour avec succès"}))
                    res.end()
                }
                else{
                    res.write(JSON.stringify({message : "l'entrepreneur n'existe pas"}))
                    res.end()
                }
            }
            if (req.file) {
                const imageEntrepreneur = await dbConnector.imageEntrepreneur.findOne({ where: { entrepreneurId: req.params.id } })
                let updateImageEntrepreneur = {
                    nomE : req.file.originalname,
                    uid : req.file.filename,
                    entrepreneurId : entrepreneur.id
                }
                if (!imageEntrepreneur) {
                    dbConnector.imageEntrepreneur.create(updateImageEntrepreneur).then(() => {
                        res.status(201).json({message: "image ajouté avec succès !"})
                    })
                }
                else{
                    let nomFichier = imageEntrepreneur.uid
                    fs.unlink(`./uploads/${nomFichier}`, (err) => {
                        if (err){
                            console.log(err)
                        }
                        else{
                            console.log('image supprimé avec succès')
                        }
                        
                    })
                    imageEntrepreneur.update(updateImageEntrepreneur)
                    res.write(JSON.stringify({message : "image mise a jour avec succès !"}))
                    res.end()
                }
            }
        }
    } catch (error) {
        res.json(error)
    }
}

// supprime un entrepreneur par son id
exports.delete = async (req, res, next) => {
    console.log(req.params.id)
    try {
        const entrepreneur = await dbConnector.entrepreneur.findOne({where : {utilisateurId : req.params.id}})
        if (entrepreneur) {
            const imageEntrepreneur = await dbConnector.imageEntrepreneur.findByPk(entrepreneur.imageId)
            if (imageEntrepreneur) {
                console.log(imageEntrepreneur.uid)
                fs.unlink(`./uploads/${imageEntrepreneur.uid}`, (err) => {
                    if (err){
                        console.log(err)
                    }
                    else{
                        console.log(`image supprimé avec succès`)
                    }
                    
                })
                dbConnector.imageEntrepreneur.destroy({where : {id : entrepreneur.imageId}})
            }
            dbConnector.entrepreneur.destroy({where : {utilisateurId : req.params.id}})
            client.update({roleId : 1}, {id : req.params.id})
            res.write(JSON.stringify({Message :  `entrepreneur  a été suprimer avec succès !` }))
            res.end()
        }
        else{
            res.write(JSON.stringify({Message :  `L'entrepreneur n'existe pas` }))
            res.end()
        }

    } catch (error) {
        res.json(error)
    }
}