const express = require('express');

const app = express();

app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.get('/', (req, res) => {
    res.send({});
    console.log("Funciona");
    next();
});

app.get('/login', (req, res) => {
    res.send([1,2,3]);
    console.log("Dentro de login")
});

module.exports = app;