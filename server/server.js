const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyparser = require('body-parser');
require('./config/config');

app.use(bodyparser.urlencoded({ extended: false }))

app.use(bodyparser.json())

app.use(require('./routes/usuario.js'));

mongoose.connect(process.env.dicmongo, (err, res) => {
    if (err) throw err;
    console.log("base de datos escuchando");
});

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto', process.env.PORT);
});