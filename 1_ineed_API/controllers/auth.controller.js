const dbConnector = require("../tools/dbConnect").get()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const fs = require('fs')
var email = ""

// login d'un utilisateur
exports.login = async (req, res, next) => {
    const utilisateur = await dbConnector.utilisateur.findOne({where: {email: req.body.email}})
    if (utilisateur == undefined) {
        res.status(403).send({message : "cette adresse email n'existe pas"})
    }
    if (utilisateur) {
        const client = await dbConnector.client.findOne({where : {utilisateurId : utilisateur.id}})
        const password = bcrypt.compareSync(req.body.password.trim(), utilisateur.password)
        if (!password) {
            return res.status(403).send({
                accessToken: null,
                message: "mot de passe incorecte"
            })
        }
        else{
            const dataToken = {
                id : utilisateur.id,
                email : utilisateur.email,
                roleId : client.roleId
            }
            // j'envoie les donnée du utilisateur dans le token
            console.log("j'envoie mon token")
            var refreshToken = jwt.sign(dataToken, process.env.REFRESH_TOKEN_SECRET, {expiresIn: parseInt(process.env.REFRESH_TOKEN_LIFE)})
            var token = jwt.sign(dataToken, process.env.TOKEN_SECRET, {expiresIn: parseInt(process.env.TOKEN_LIFE)})
            dbConnector.client.update({'refreshToken' : refreshToken}, {
                where: {
                    id: client.id
                }
            })
            res.status(202).send({
                accessToken : token,
                refreshToken : refreshToken
            })
        }
    }
}

// renew token
exports.refreshToken = async (req, res, next) => {
// vérification de la validités du token
    console.log("je rentre dans mon refreshToken")
    const Rtoken =  req.body.refreshToken
    jwt.verify(Rtoken,process.env.REFRESH_TOKEN_SECRET, (err) => {
    // si le refreshToken est invalide je force la déconnexion dans le front-end => code 410
    if (err) {
        console.log(err)
        console.log("refresh token invalide !")
        res.status(410).json({error: "erreur d'authentification du refresh token"})
        next()
    }
    console.log("jwtControl ok je passe a la suite")
    
// décodage du token et extraction de l'email
    const decodedToken = jwt.decode(Rtoken, {
        complete: true
    });
    email = decodedToken.payload.email
    });

// récuperation e l'utilisateur correspondant a l'email
    const utilisateur = await dbConnector.utilisateur.findOne({where: {email: email}})
    if (utilisateur == undefined) {
        res.status(410).send({message : "cette adresse email n'existe pas"})
    }

// si l'utilisateur existe
    if (utilisateur) {
        // récupération du client correspondant a l'utilisateurId récupéré
            const client = await dbConnector.client.findOne({where : {utilisateurId : utilisateur.id}})
        // récupération du refreshToken de l'utilisateur
            const refreshTokenFromDb = client.refreshToken
        // si le refresh token est différent de celui enregistrer en db
        if (refreshTokenFromDb != Rtoken) {
            // on force la déconnexion
                return res.status(410).send({accessToken: null, message: "Refresh token incorecte"})
        }
        else{
            // on reconstruit un nouveau token comporant les infos utilisateurs
                const dataToken = {
                    id : utilisateur.id,
                    email : utilisateur.email,
                    roleId : client.roleId
                }
            // j'envoie les donnée de l'utilisateur dans le token
                console.log("j'envoie mon token")
                // je regénère un nouveau token + refreshToken
                    var token = jwt.sign(dataToken, process.env.TOKEN_SECRET, {expiresIn: parseInt(process.env.TOKEN_LIFE)})
                    var refreshToken = jwt.sign(dataToken, process.env.REFRESH_TOKEN_SECRET, {expiresIn: parseInt(process.env.REFRESH_TOKEN_LIFE)})
                // j'envoie le nouveau refresh token en db
                    dbConnector.client.update({'refreshToken' : refreshToken}, {
                        where: {
                            id: client.id
                        }
                    })
                // je renvoie les token vers le front
                    res.status(202).send({
                        accessToken : token,
                        refreshToken : refreshToken
                    })
        }
    }
}

// register d'un utilisateur
exports.registerUtilisateur = async (req, res, next) => {
    try {
        if (req.body.nom && req.file) {
            // je férifie si le client n'existe pas déja dans la db
                let utilisateur = await dbConnector.utilisateur.findOne({where: {'email' :req.body.email}})
                console.log(utilisateur)
                if (utilisateur) {
                    fs.unlink(`./uploads/${req.file.filename}`, (err) => {
                        if (err){
                            console.log(err)
                        }
                        else{
                            console.log('image supprimé avec succès')
                        }
                        
                    })
                    return res.status(403).json({message: "l'adresse e-mail existe déja dans le système"})
                }
                else{
                    // création d'un nouvel utilisateur
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
                        dbConnector.utilisateur.create(newUtilisateur).then((result) => {
                            // création d'une image utilisateur
                                let newImageUtilisateur = {
                                    nomE : req.file.originalname,
                                    uid : req.file.filename,
                                    utilisateurId : result.id
                                }
                                dbConnector.imageUtilisateur.create(newImageUtilisateur).then((result) => {
                                    // update de l'utilisateur pour lié l'id de l'image
                                        dbConnector.utilisateur.update(
                                            {
                                                imageId: result.id,
                                            },
                                            {
                                                where: { id: result.utilisateurId },
                                            }
                                        ).then(() => {
                                            next()
                                        })
                                })
                        })
                }
        }
        // la requette ne contient que le body
        else{
            // je férifie si le client n'existe pas déja dans la db
                let utilisateur = await dbConnector.utilisateur.findOne({where: {'email' :req.body.email}})
                console.log(utilisateur)
                if (utilisateur) {
                    return res.status(403).json({message: "l'adresse e-mail existe déja dans le système"})
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
                }
        }
            
    } catch (error) {
        console.log(error)
    }
}

// register d'un client
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
        // si la requete contient un body et un fichier
        if (req.body.nomE && req.file) {
            console.log()
            const entrepreneur = await dbConnector.entrepreneur.findOne({where: {'nomE' :req.body.nomE}})
            if (entrepreneur) {
                fs.unlink(`./uploads/${req.file.filename}`, (err) => {
                    if (err){
                        console.log(err)
                    }
                    else{
                        console.log('image supprimé avec succès')
                    }
                    
                })
                return res.status(403).json({message: "le compte entrepreneur existe déja !"})
            }
            else{
                // enregistrement d'un nouvel entrepreneur
                    let newEntrepreneur = {
                        nomE : req.body.nomE,
                        numeroRueE : req.body.numeroRueE,
                        rueE : req.body.rueE,
                        villeE : req.body.villeE,
                        codePostalE : req.body.codePostalE,
                        utilisateurId : req.body.utilisateurId
                    }
                    dbConnector.entrepreneur.create(newEntrepreneur).then((result)=> {
                        // création d'un image entrepreneur
                            let newImageEntrepreneur = {
                                nomE : req.file.originalname,
                                uid : req.file.filename,
                                entrepreneurId : result.id
                            }
                            dbConnector.imageEntrepreneur.create(newImageEntrepreneur).then((result) => {
                                // update de l'entrepreneur pour lié l'id de l'image
                                    dbConnector.entrepreneur.update(
                                        {
                                            imageId: result.id,
                                        },
                                        {
                                            where: { id: result.entrepreneurId },
                                        }
                                    ).then(() => {
                                        res.status(201).json({message : 'entrepreneur et image ajouté avec succès !'})
                                    })
                            })
                })
            }
        }
        // si la requete ne contient que le body
        else{
            // enregistrement d'un nouvel entrepreneur
                let newEntrepreneur = {
                    nomE : req.body.nomE,
                    numeroRueE : req.body.numeroRueE,
                    rueE : req.body.rueE,
                    villeE : req.body.villeE,
                    codePostalE : req.body.codePostalE,
                    utilisateurId : req.body.utilisateurId
                }
                dbConnector.entrepreneur.create(newEntrepreneur).then(() => {
                    res.status(201).json({message : 'entrepreneur ajouté avec succès !'})
                })
        }
    } catch (error) {
        console.log(error)
    }
}