require("dotenv").config()
const { Sequelize, DataTypes } = require("sequelize")

// ici import de tout mes modèles
const utilisateurModel = require("../models/utilisateur.model")
const clientModel = require("../models/client.model")
const entrepreneurModel = require("../models/entrepreneur.model")
const categorieModel = require("../models/categorie.model")
const livraisonModel = require("../models/livraison.model")
const commandeModel = require("../models/commande.model")
const ligneCommandeModel = require("../models/ligneCommande.model")
const produitModel = require("../models/produit.model")
const roleModel = require("../models/role.model")
const imageCategorieModel = require("../models/imageCategorie.model")
const imageEntrepreneurModel = require("../models/imageEntrepreneur.model")
const imageProduitModel = require("../models/imageProduit.model")
const imageUtilisateurModel = require("../models/imageUtilisateur.model")

let dbConnector

module.exports = {
    connect : () => {
        if (!dbConnector){
            const sequelize = new Sequelize(
                process.env.DB_NAME, 
                process.env.DB_USER, 
                process.env.DB_PASSWORD,
                {
                    host: process.env.DB_HOST,
                    dialect: "mysql",
                    port: 3306,
                    timezone: "+02:00"
                })
            dbConnector = {
                Sequelize: Sequelize,
                sequelize: sequelize,
                utilisateur: utilisateurModel(sequelize,DataTypes),
                client: clientModel(sequelize,DataTypes),
                entrepreneur : entrepreneurModel(sequelize,DataTypes),
                categorie: categorieModel(sequelize,DataTypes),
                livraison: livraisonModel(sequelize,DataTypes),
                commande: commandeModel(sequelize,DataTypes),
                ligneCommande: ligneCommandeModel(sequelize,DataTypes),
                produit: produitModel(sequelize,DataTypes),
                role: roleModel(sequelize,DataTypes),
                imageCategorie: imageCategorieModel(sequelize,DataTypes),
                imageEntrepreneur: imageEntrepreneurModel(sequelize,DataTypes),
                imageProduit: imageProduitModel(sequelize,DataTypes),
                imageUtilisateur: imageUtilisateurModel(sequelize,DataTypes)
            }

            // ici je définis toutes les règles de liaison entre les tables

                // entrepreneur a un utilisateur
                    dbConnector.utilisateur.hasOne(dbConnector.entrepreneur);
                    dbConnector.entrepreneur.belongsTo(dbConnector.utilisateur);

                // client a un utilisateur
                    dbConnector.utilisateur.hasOne(dbConnector.client);
                    dbConnector.client.belongsTo(dbConnector.utilisateur);

                // un role a plusieurs clients
                    dbConnector.role.hasMany(dbConnector.client);
                    dbConnector.client.belongsTo(dbConnector.role);

                // un client a plusieur commandes
                    dbConnector.client.hasMany(dbConnector.commande);
                    dbConnector.commande.belongsTo(dbConnector.client);

                // livraison a une commande
                    dbConnector.commande.hasOne(dbConnector.livraison);
                    dbConnector.livraison.belongsTo(dbConnector.commande);

                // un commande a plusieur ligne commandes
                    dbConnector.commande.hasMany(dbConnector.ligneCommande);
                    dbConnector.ligneCommande.belongsTo(dbConnector.commande);

                // un produit a plusieurs ligne de commandes
                    dbConnector.produit.hasMany(dbConnector.ligneCommande);
                    dbConnector.ligneCommande.belongsTo(dbConnector.produit);

                // une catégorie a plusieurs produits
                    dbConnector.categorie.hasMany(dbConnector.produit);
                    dbConnector.produit.belongsTo(dbConnector.categorie);

                // un entrepreneur a plusieur produits
                    dbConnector.entrepreneur.hasMany(dbConnector.produit);
                    dbConnector.produit.belongsTo(dbConnector.entrepreneur);

                // un utilisateur a une image
                    dbConnector.utilisateur.hasOne(dbConnector.imageUtilisateur);
                    dbConnector.imageUtilisateur.belongsTo(dbConnector.utilisateur);

                // un entrepreneur a une image
                    dbConnector.entrepreneur.hasOne(dbConnector.imageEntrepreneur);
                    dbConnector.imageEntrepreneur.belongsTo(dbConnector.entrepreneur);

                // un produit a plusieurs images
                    dbConnector.produit.hasMany(dbConnector.imageProduit);
                    dbConnector.imageProduit.belongsTo(dbConnector.produit);

                // une catégorie a une image
                    dbConnector.categorie.hasOne(dbConnector.imageCategorie);
                    dbConnector.imageCategorie.belongsTo(dbConnector.categorie);

                //  dbConnector.sequelize.sync({force : true})
        }
    },

    get : () => {
        if(!dbConnector)
            this.connect
        else
            return dbConnector
    }
}