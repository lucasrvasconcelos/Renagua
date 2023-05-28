const express = require("express")
const app = express()
const port = 3000 || process.env.port

//configuração página estática
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configuração template engine
// configuração handlebars
const handlebars = require("express-handlebars")
app.engine('handlebars', handlebars.engine({defautLayout: "main"}));
app.set('view engine', 'handlebars');
app.set('views', './public/views');
app.enable('view cache');

app.get("/", (requisicao, resposta) => {
    resposta.render("index")
})

app.listen(port, () => {
    console.log(`Conectado a porta ${port}`)
})