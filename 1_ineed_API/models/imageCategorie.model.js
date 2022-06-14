const imageCategorieModel = (sequelize, DataTypes) => {
    const imageCategorieModel = sequelize.define("imageCategorie", {
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

    return imageCategorieModel
}

module.exports = imageCategorieModel