const imageUtilisateurModel = (sequelize, DataTypes) => {
    const imageUtilisateurModel = sequelize.define("imageProduit", {
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

    return imageUtilisateurModel
}

module.exports = imageUtilisateurModel