const commandeModel = (sequelize, DataTypes) => {
    const commande = sequelize.define("commande", {
        prix: {
            type: DataTypes.REAL,
            allowNull: false
        }
    },
    {
        // permet de ne pas generer les colonnes créer par sequelize
        createdAt: false
    })

    return commande
}

module.exports = commandeModel