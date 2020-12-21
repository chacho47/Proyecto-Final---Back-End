const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
// crear el servidor
const app = express();

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/T&SMedicina', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}); 

app.use(cors());

//habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar routing
app.use('/', routes())

//puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando');
})