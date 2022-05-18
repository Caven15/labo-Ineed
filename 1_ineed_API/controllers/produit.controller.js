const dbConnector = require("../tools/dbConnect").get()

// ajoute un nouveau produit
exports.addProduit= async (req, res, next) => {
    try {
        const produit = await dbConnector.produit.findOne({where: {'produit' :req.body.produit}})
        if (produit) {
            return res.status(401).json({message: "la catégorie existe déja dans le système !"})
        }
    } catch (error) {
        
    }
}

// récupère tout les produit

// récupère otut les produit par leurs id de catégorie

// récupère otut les produit par leurs id d'entrepreneur

// mes a jour une catégorie par son id

// supprime une catégorie par son id