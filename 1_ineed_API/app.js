const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const cors = require("cors")
const db = require("./tools/dbConnect")

// j'initialise mon projet et je me connecte a la db
db.connect()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
// utilisation du cors pour autoriser toute les origine de connexion au serveur
app.use(cors())
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    ) 
    next();
})

// ici j'importe tout mes routeurs pour la redirection...
    const authRouter = require("./routers/auth.router")
    app.use("/auth", authRouter)

    const roleRouter = require("./routers/role.router")
    app.use("/role", roleRouter)

    const clientRouter = require("./routers/client.router")
    app.use("/client", clientRouter) 

    const entrepreneurRouter = require("./routers/entrepreneur.router")
    app.use("/entrepreneur", entrepreneurRouter)

    const utilisateurRouter = require("./routers/utilisateur.router")
    app.use("/utilisateur", utilisateurRouter)

    const categorieRouter = require("./routers/categorie.router")
    app.use("/categorie", categorieRouter)

    const produitRouter = require("./routers/produit.router")
    app.use("/produit", produitRouter)

    const commandeRouter = require("./routers/commande.router")
    app.use("/commande", commandeRouter)

    const livraisonRouter = require("./routers/livraison.router")
    app.use("/livraison", livraisonRouter)

    const ligneCommandeRouter = require("./routers/ligneCommande.router")
const { upload } = require("./middleware/gestionImage")
    app.use("/ligneCommande", ligneCommandeRouter)

// si aucune route n'est trouvée
    app.all("*", (req, res, next) => {
        console.log("aucune route ne correspond a cette requete... (veuillez revoir la syntaxe)")
        res.write(JSON.stringify("aucune route ne correspond a cette requete... (veuillez revoir la syntaxe)"))
        res.end()
    })

app.listen(PORT, console.log("serveur connecté :)"))