const utilisateurModel = (sequelize, DataTypes) => {
    const utilisateur = sequelize.define("utilisateur", {
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateNaissance: {
            type: DataTypes.DATE,
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

    return utilisateur
}

module.exports = utilisateurModel