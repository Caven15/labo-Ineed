const ligneCommandeModel = (sequelize, DataTypes) => {
    const ligneCommande = sequelize.define("ligneCommande", {
        quantite: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        prix: {
            type: DataTypes.REAL,
            allowNull: false
        }
    },
    {
        // permet de ne pas generer les colonnes créer par sequelize
        createdAt: false,
        updatedAt: false,
    })

    return ligneCommande
}

module.exports = ligneCommandeModel