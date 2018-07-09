const express = require('express');
const app = express();
const bodyparser = require('body-parser');
require('./config/config');

app.use(bodyparser.urlencoded({ extended: false }))

app.use(bodyparser.json())

app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {
    let persona = req.body;
    res.json({ persona });
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});

app.listen(3000, () => {
    console.log('escuchando puerto', process.env.PORT);
});