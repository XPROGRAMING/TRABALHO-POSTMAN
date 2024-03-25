// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Configuração das rotas
app.use('/', routes);

// Inicia a conexão com o banco de dados e o servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
  });
});
