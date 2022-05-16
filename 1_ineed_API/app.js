const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const cors = require("cors")
const db = require("./tools/dbConnect")

db.connect()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    ) 
    next();
})
app.use(cors())

// ici j'importe tout mes routeur pour la redirection...

    const authRouter = require("./routers/auth.router")
    app.use("/auth", authRouter)

    const roleRouter = require("./routers/role.router")
    app.use("/role", roleRouter)

    //...

// si aucune route n'est trouvée
app.all("*", (req, res, next) => {
    console.log("le route que vous chercher n'existe pas...")
    res.end()
})

app.listen(PORT, console.log("serveur connecté :)"))