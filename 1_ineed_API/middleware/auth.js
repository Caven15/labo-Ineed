const dbConnector = require("../tools/dbConnect").get()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

// jwtControl
exports.jwtControl = (req, res, next) => {
    console.log("je passe dans le jwtControl")
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
            if (err) {
                return res.sendStatus(403).json({error: "erreur d'authentification"})
            }
            console.log("jwtControl ok je passe a la suite")
            next();
        });
    } 
    else {
        console.log("aucun token reconnu !")
        res.sendStatus(403).json({error: "vous n'avez pas inserer de token"})
    }
}

// utilisateurControl
exports.clientControl = async (req, res, next) => {
    console.log("middleware client control")
    try {
        // je récupère le token
            const authHeader = req.headers.authorization;
        // j'extrait l'id et je retourne son instance avec findByPk
            const token = authHeader.split(' ')[1];
            var decoded = jwt.decode(token, {complete: true});
            client = await dbConnector.client.findOne({where: {utilisateurId : decoded.payload.id}})
            console.log("----------")
            console.log(client.roleId)
            console.log("----------")
        // je férifier si le role id est >= 1
            if (client.roleId  == 1 ) {
                
                // oui => next()
                next()
            }
    } catch (error) {
        res.status(403).json({"error" : "Veuillez vous connecté pour acceder a cette zone"})
    }
}

// moderateurControl
exports.moderateurControl = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        var decoded = jwt.decode(token, {complete: true});
        client = await dbConnector.client.findByPk(decoded.payload.id)
        if (client.roleId  >= 2 ) {
            // oui => next()
            next()
        }
    } catch (error) {
        res.status(403).json({"error" : "vous devez etre moderateur pour acceder a cette zone"})
    }
}

// administrateurControl
exports.administrateurControl = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        var decoded = jwt.decode(token, {complete: true});
        client = await dbConnector.client.findByPk(decoded.payload.id)
        if (client.roleId  >= 3 ) {
            // oui => next()
            next()
        }
    } catch (error) {
        res.status(403).json({"error" : "vous devez etre administrateur pour acceder a cette zone"})
    }
}

// entrepreneurControl
exports.entrepreneurControl = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    var decoded = jwt.decode(token, {complete: true});
    client = await dbConnector.client.findByPk(decoded.payload.id)
    entrepreneur = await dbConnector.entrepreneur.findOne({where : {utilisateurId : client.id}})
    if (!entrepreneur) {
        console.log("-----------------------------")
        console.log("  entrepreneur control Nok ! ")
        console.log("-----------------------------")
        res.status(403).json({"error" : "vous devez etre entrepreneur pour acceder a cette zone !"})
    }
    console.log("-----------------------------")
    console.log(" entrepreneur control ok :)  ")
    console.log("-----------------------------")
    next()
}