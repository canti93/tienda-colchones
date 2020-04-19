const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const colchon = require('./routes/colchon');
app.use('/api/colchones/', colchon); 

const somier = require('./routes/somier');
app.use('/api/somieres/', somier);

const user = require('./routes/user');
app.use('/api/users/', user);

const auth = require('./routes/auth');
app.use('/api/auth/', auth);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('Escuchando por el puerto ' + port));

mongoose.connect('mongodb://localhost/colchonesdb', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
        .then(()=> console.log('Conexion con exito a la BD'))
        .catch(error => console.log('No se ha conectado a la BD'));
