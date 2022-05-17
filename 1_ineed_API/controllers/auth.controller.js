const dbConnector = require("../tools/dbConnect").get()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// login d'un utilisateur
exports.login = async (req, res, next) => {
    //...
}

// register d'un utilisateur
exports.registerUtilisateur = async (req, res, next) => {
    try {
        // je férifie si le client n'existe pas déja dans la db
        let utilisateur = await dbConnector.utilisateur.findOne({where: {'email' :req.body.email}})
        if (utilisateur) {
            return res.status(401).json({message: "l'adresse e-mail existe déja dans le système"})
        }
        // sinon je stock mes valeur et j'envoie a la db
        else {
            let newUtilisateur = {
                nom : req.body.nom,
                prenom : req.body.prenom,
                dateNaissance : req.body.dateNaissance,
                numeroRue : req.body.numeroRue,
                rue : req.body.rue,
                ville : req.body.ville,
                codePostal : req.body.codePostal,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password.trim(), 10),
                roleId : 1
            }
            dbConnector.utilisateur.create(newUtilisateur)
            .then((response)=> {
                next()
                })
                console.log("test")
        }
    } catch (error) {
        console.log(error)
    }
}

// register d'un entrepreneur
exports.registerClient = async (req, res, next) => {
    try {
        const utilisateur = await dbConnector.utilisateur.findOne({where: {'email' :req.body.email}})
        let newClient = {
            utilisateurId : utilisateur.id,
            roleId : 1
        }
        dbConnector.client.create(newClient)
            .then(()=> {
                res.status(201).json({message : 'client ajouté avec succès !'})
            })
    } catch (error) {
        console.log(error)
    }
}

// register d'un entrepreneur
exports.registerEntrepreneur = async (req, res, next) => {
    try {
        const utilisateur = await dbConnector.utilisateur.findOne({where: {'email' :req.body.email}})
        if (!utilisateur) {
            return res.status(401).json({message: "vous devez d'abords créer un compte utilisateur !"})
        }
        else{
            let newEntrepreneur = {
                nomE : req.body.nomE,
                numeroRueE : req.body.numeroRueE,
                rueE : req.body.rueE,
                villeE : req.body.villeE,
                codePostalE : req.body.codePostalE,
                email : req.body.email,
                utilisateurId : utilisateur.id
            }
            dbConnector.entrepreneur.create(newEntrepreneur)
                .then(()=> {
                    res.status(201).json({message : 'entrepreneur ajouté avec succès !'})
                })
        }
    } catch (error) {
        console.log(error)
    }
}