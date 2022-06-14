const imageEntrepriseModel = (sequelize, DataTypes) => {
    const imageEntrepriseModel = sequelize.define("imageEntreprise", {
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

    return imageEntrepriseModel
}

module.exports = imageEntrepriseModel