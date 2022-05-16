const roleModel = (sequelize, DataTypes) => {
    const role = sequelize.define("role", {
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        // permet de ne pas generer les colonnes créer par sequelize
        createdAt: false,
        updatedAt: false,
    })

    return role
}

module.exports = roleModel