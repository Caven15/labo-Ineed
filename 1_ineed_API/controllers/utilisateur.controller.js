const dbConnector = require("../tools/dbConnect").get()
const bcrypt = require("bcrypt")
const fs = require('fs')

// delete utilisateur + client + entrepreneur
exports.delete = async (req, res, next) => {
    try {
        const utilisateur = await dbConnector.utilisateur.findOne({where : {id : req.params.id}})
        if (utilisateur) {
            const imageUtilisateur = await dbConnector.imageUtilisateur.findByPk(utilisateur.imageId)
            if (imageUtilisateur) {
                fs.unlink(`./uploads/${imageUtilisateur.uid}`, (err) => {
                    if (err){
                        console.log(err)
                    }
                    else{
                        console.log(`image supprimé avec succès`)
                    }
                    
                })
                dbConnector.imageUtilisateur.destroy({where : {id : utilisateur.imageId}})
            }
            dbConnector.utilisateur.destroy({where : {id : req.params.id}})
            res.write(JSON.stringify({Message :  `utilisateur nr : ${req.params.id} a été suprimer avec succès !` }))
            res.end()
        }else{
            res.write(JSON.stringify({Message :  `utilisateur nr : ${req.params.id} n'existe pas` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}

// modification du mot de passe d'un utilisateur
exports.updatePassword = async (req, res, next) => {
    try {
        const utilisateur = await dbConnector.utilisateur.findByPk(req.params.id)
        if (utilisateur) {
            const password = bcrypt.compareSync(req.body.oldPassword.trim(), utilisateur.password)
            if (!password) {
                res.status(403).send({message: "mot de passe invalide !"})
            }
            if (req.body.newPassword != req.body.confirmNewPassword) {
                res.status(403).send({message: `le mot de passe ne correspond pas !`})
            }
            if (req.body.newPassword == "") {
                res.status(403).send({message: `le mot de passe ne peut être vide !`})
            } 
            const newPassword = bcrypt.hashSync(req.body.newPassword.trim(), 10)
            await utilisateur.update({password : newPassword})
            res.status(201).send({message: "mot de passe changé avec succès !"})
        }
        else {
            res.write(JSON.stringify({Message :  `utilisateur nr : ${req.params.id} n'existe pas !` }))
            res.end()
        }
    } catch (error) {
        res.json(error)
    }
}