var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* Importa o Mongoose. */
var mongoose = require("mongoose");
// @ts-ignore
mongoose.connect(process.env.MONGODB_URI);

/* Estabelece a conexão com o Banco de Dados. */
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão!'));

/* Cria o modelo de documento para o Mongodb. */
var UsuarioModelo = require("./UsuarioModelo");

var app = express();

/* Insere um usuário no documento. Retorna se houver exceção ou sucesso. */
var usuario = new UsuarioModelo({nome: 'Fernando'});

usuario.save(err=>{
    if(err){
        console.error("Erro ao criar o usuário!");
    }else{
        console.log("Usuário criado com sucesso!");
    }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
