const express = require('express');
const express = require('../src/routes')

const app = express();

app.use(express.json());


//rotas


//erros


const PORT = 3000;
app.listen( PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})