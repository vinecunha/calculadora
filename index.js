// controller/index.js
import express from 'express';
const Router = express.Router();

Router.get('/', (req, res) => {
  const message = `<div style='width: 100vw; margin: 0 auto;'>
<h1 style='text-align: center'>Bem-vindo à calculadora!</h1><br><br>
Este é um projeto de calculadora através de consumo de API, onde os parâmetros são passados via URL e a rota GET retorna o resultado da operação solicitada. Para usar a calculadora, acesse os seguintes endpoints:<br><br>
    <code>+</code> Soma: /soma/{num1}/{num2}<br>
    &nbsp;&nbsp;&nbsp;&nbsp;Ex.:<strong><code><a href='http://localhost:3000/soma/1/1'>http://localhost:3000/soma/1/1</a></code></strong><br><br>
    <code>-</code> Subtração: /subtracao/{num1}/{num2}<br>
    &nbsp;&nbsp;&nbsp;&nbsp;Ex.:<strong><code><a href='http://localhost:3000/subtracao/1/1'>http://localhost:3000/subtracao/1/1</a></code></strong><br><br>
    <code>*</code> Multiplicação: /multiplicacao/{num1}/{num2}<br>
    &nbsp;&nbsp;&nbsp;&nbsp;Ex.:<strong><code><a href='http://localhost:3000/multiplicacao/1/1'>http://localhost:3000/multiplicacao/1/1</a></code></strong><br><br>
    <code>/</code> Divisão: /divisao/{num1}/{num2}<br>
    &nbsp;&nbsp;&nbsp;&nbsp;Ex.:<strong><code><a href='http://localhost:3000/divisao/1/1'>http://localhost:3000/divisao/1/1</a></code></strong><br><br>
Substitua <code>{num1}</code> e <code>{num2}</code> pelos números que deseja calcular.</div>
  `;
  res.send(message);
});

export default Router;
