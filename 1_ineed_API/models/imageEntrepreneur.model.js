const imageEntrepreneurModel = (sequelize, DataTypes) => {
    const imageEntrepreneurModel = sequelize.define("imageEntrepreneur", {
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

    return imageEntrepreneurModel
}

module.exports = imageEntrepreneurModel