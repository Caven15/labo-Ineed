const entrepreneurModel = (sequelize, DataTypes) => {
    const entrepreneur = sequelize.define("entrepreneur", {
        nomEntreprise: {
            type: DataTypes.STRING,
            allowNull: false
        },
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        // permet de ne pas generer les colonnes créer par sequelize
        createdAt: false,
        updatedAt: false,
    })

    return entrepreneur
}

module.exports = entrepreneurModel