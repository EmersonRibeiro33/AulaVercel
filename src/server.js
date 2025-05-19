const express = require("express");
const app = express(); // inicializa a variável Express
const port = 3000; // Define a porta url como 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // define o diretório do port para o html
})

app.listen(port, () => {
    console.log("Listen to port "+port);
})
