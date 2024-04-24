const router = require('express').Router()

//Rotas
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Teste CRUD'
    })
})

module.exports = router
