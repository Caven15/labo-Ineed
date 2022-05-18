const livraisonModel = (sequelize, DataTypes) => {
    const livraison = sequelize.define("livraison", {
        numeroRueL: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rueL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        villeL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codePostalL: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estLivre: {
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