import express from 'express';
const app = express();
const port = 3000;

// Importar os roteadores dos endpoints
import soma from './controller/soma.js';
import subtracao from './controller/subtracao.js';
import multiplicacao from './controller/multiplicacao.js';
import divisao from './controller/divisao.js';

import home from './index.js'

// Definir as rotas para cada endpoint
app.use('/', home);
app.use('/soma', soma);
app.use('/subtracao', subtracao);
app.use('/multiplicacao', multiplicacao);
app.use('/divisao', divisao);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
