//A boa prática é sempre chamar as dependencias que foram instaladas, depois as qual você criou no projeto.
const express = require('express');
const path = require('path');
const db = require('./database');
const routes = require('./routes');

const app = express();

//conexão com o banco de dados
db.connect()

//Definindo o template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//Definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//Habilitada o server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

//Definindo as rotas
app.use('/', routes)

//404 error (not found)
app.use((req, res) => { //middleware
    res.send('Pagina não encontrada!')
})

//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))