//Importar dependencia
const express = require('express');
const server = express();
const path = require('path')
const pages = require('./pages.js')

server.use(express.urlencoded({ extended: true }))
    // Arquivos estáticos
server.use(express.static('public'))

//Engine
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')

//Criar rota
server.get('/', pages.index)
server.get('/orfanato', pages.orfanato)
server.get('/orfanatos', pages.orfanatos)
server.get('/cadastro-orfanato', pages.cadastroOrfanato)
server.post('/salvar_orfanato', pages.salvarOrfanato)



//Ligar sevidor
server.listen(5500);