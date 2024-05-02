const mongoose = require('mongoose')

//o schema tem seus tipos para definição de variável, então é sempre importante pesquisar no google sobre "mongoose schema" para saber o certo.
//estrutura para formar tabelas para o mongodb
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

//modelar a tabela para o mongodb (padrão MVC - MODEL VIEW CONTROLLER)
const Model = mongoose.model('customers', schema)

module.exports = Model
