import express from 'express';
const Router = express.Router();

// Endpoint para divisão
Router.get('/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  if (num2 === 0) {
    res.status(400).send('Erro: Não é possível dividir por zero.');
    return;
  }

  const resultado = num1 / num2;
  res.send(`
    A operação de ${num1.toLocaleString()} ÷ ${num2.toLocaleString()} = ${resultado.toLocaleString()}<br>
    <button style="margin: 1rem 0;" onclick="goToHome()">Página Inicial</button>
      <script>
        function goToHome() {
          window.location.href = '/';
        }
      </script>
  `);
});

export default Router;