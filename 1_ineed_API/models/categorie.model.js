const categorieModel = (sequelize, DataTypes) => {
    const categorie = sequelize.define("categorie", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
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

    return categorie
}

module.exports = categorieModel