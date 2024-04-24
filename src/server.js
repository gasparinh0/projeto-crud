const express = require('express');
const path = require('path');

const app = express();

//Definindo o template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//Definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//Habilitada o server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

//Rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Teste CRUD'
    })
})

//404 error (not found)
app.use((req, res) => { //middleware
    res.send('Pagina não encontrada!')
})

//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))