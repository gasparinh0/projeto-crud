const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de clientes'

function index(req, res){
    res.render('register', {
        title: 'Cadastro de clientes'
    })
}

async function listUsers(req, res){
    const users = await CustomersModel.find()


    res.render('listUsers', {
        title: defaultTitle,
        users,
    })
}

async function add(req, res) {

    const {
        name,
        age,
        email,
        password,

    } = req.body;

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,

    })
    
    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso!',
    })
}

module.exports = {
    index,
    add,
    listUsers,
}