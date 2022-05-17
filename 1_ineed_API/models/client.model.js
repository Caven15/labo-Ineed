const clientModel = (sequelize, DataTypes) => {
    const client = sequelize.define("client", {
    },
    {
        // permet de ne pas generer les colonnes créer par sequelize
        createdAt: true,
        updatedAt: true,
    })

    return client
}

module.exports = clientModel