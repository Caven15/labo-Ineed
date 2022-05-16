const livraisonModel = (sequelize, DataTypes) => {
    const livraison = sequelize.define("livraison", {
        numeroRue: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ville: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codePostal: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        statut: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        // permet de ne pas generer les colonnes créer par sequelize
        createdAt: false,
        updatedAt: false,
    })

    return livraison
}

module.exports = livraisonModel