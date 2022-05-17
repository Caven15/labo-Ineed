const entrepreneurModel = (sequelize, DataTypes) => {
    const entrepreneur = sequelize.define("entrepreneur", {
        nomE: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numeroRueE: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rueE: {
            type: DataTypes.STRING,
            allowNull: false
        },
        villeE: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codePostalE: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        // permet de ne pas generer les colonnes créer par sequelize
        createdAt: true,
        updatedAt: true,
    })

    return entrepreneur
}

module.exports = entrepreneurModel