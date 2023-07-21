import express from 'express';
const Router = express.Router();

// Endpoint para multiplicação
Router.get('/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const resultado = num1 * num2;
  res.send(`
    A multiplicação de ${num1} e ${num2} é igual a ${resultado}<br>
    <button style="margin: 1rem 0;" onclick="goToHome()">Página Inicial</button>
      <script>
        function goToHome() {
          window.location.href = '/';
        }
      </script>
  `);
});

export default Router;