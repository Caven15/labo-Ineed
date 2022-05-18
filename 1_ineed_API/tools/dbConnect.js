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
                    port: 3308,
                    timezone: "+02:00"
                })
            dbConnector = {
                Sequelize: Sequelize,
                sequelize: sequelize,
                // ici j'importe mes modèles
                    utilisateur: utilisateurModel(sequelize,DataTypes),
                    client: clientModel(sequelize,DataTypes),
                    entrepreneur : entrepreneurModel(sequelize,DataTypes),
                    categorie: categorieModel(sequelize,DataTypes),
                    livraison: livraisonModel(sequelize,DataTypes),
                    commande: commandeModel(sequelize,DataTypes),
                    ligneCommande: ligneCommandeModel(sequelize,DataTypes),
                    produit: produitModel(sequelize,DataTypes),
                    role: roleModel(sequelize,DataTypes)

            }

            // ici je définis tout les règles concernant les tables (foreign key ect...)
            // entrepreneur a un utilisateur
                dbConnector.utilisateur.hasOne(dbConnector.entrepreneur);
                dbConnector.entrepreneur.belongsTo(dbConnector.utilisateur);

            // client a un utilisateur
                dbConnector.utilisateur.hasOne(dbConnector.client);
                dbConnector.client.belongsTo(dbConnector.utilisateur);
                
            // client a un role
                dbConnector.role.hasMany(dbConnector.client);
                dbConnector.client.belongsTo(dbConnector.role);

            // panier a un client
                dbConnector.client.hasMany(dbConnector.commande);
                dbConnector.commande.belongsTo(dbConnector.client);

            // livraison a une commande
                dbConnector.commande.hasOne(dbConnector.livraison);
                dbConnector.livraison.belongsTo(dbConnector.commande);

            // ligneCommande a un panier
                dbConnector.commande.hasMany(dbConnector.ligneCommande);
                dbConnector.ligneCommande.belongsTo(dbConnector.commande);

            // ligneCommande a un produit
                dbConnector.produit.hasMany(dbConnector.ligneCommande);
                dbConnector.ligneCommande.belongsTo(dbConnector.produit);

            // produit a une categorie
                dbConnector.categorie.hasMany(dbConnector.produit);
                dbConnector.produit.belongsTo(dbConnector.categorie);
            
            // produit a un entrepreneur
                dbConnector.entrepreneur.hasMany(dbConnector.produit);
                dbConnector.produit.belongsTo(dbConnector.entrepreneur);


            //dbConnector.sequelize.sync()    //sync({force : true}) pour reiniatiliser la db
        }
    },

    get : () => {
        if(!dbConnector)
            this.connect
        else
            return dbConnector
    }
}