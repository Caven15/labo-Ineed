const imageProduitModel = (sequelize, DataTypes) => {
    const imageProduitModel = sequelize.define("imageProduit", {
        nomC: {
            type: DataTypes.STRING,
            allowNull: false
        },
        uid: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        // permet de ne pas generer les colonnes créer par sequelize
        createdAt: false,
        updatedAt: false,
    })

    return imageProduitModel
}

module.exports = imageProduitModel