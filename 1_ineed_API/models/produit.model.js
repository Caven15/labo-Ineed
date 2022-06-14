const produitModel = (sequelize, DataTypes) => {
    const produit = sequelize.define("produit", {
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prix: {
            type: DataTypes.REAL,
            allowNull: false
        },
        quantite: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estDisponible: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        imageId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        // permet de ne pas generer les colonnes créer par sequelize
        createdAt: false,
        updatedAt: false,
    })

    return produit
}

module.exports = produitModel