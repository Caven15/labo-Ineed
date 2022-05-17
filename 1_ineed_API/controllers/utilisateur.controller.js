const dbConnector = require("../tools/dbConnect").get()

// delete utilisateur + client + entrepreneur
exports.deleteutilisateur = async (req, res, next) => {
    try {
        const utilisateur = await dbConnector.utilisateur.destroy({where : {id : req.params.id}})
        if (utilisateur) {
            dbConnector.client.destroy({where : {id : req.params.id}})
            dbConnector.entrepreneur.destroy({where : {id : req.params.id}})
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