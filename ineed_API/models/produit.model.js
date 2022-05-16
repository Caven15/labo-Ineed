const produitModel = (sequelize, DataTypes) => {
    const produit = sequelize.define("produit", {
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