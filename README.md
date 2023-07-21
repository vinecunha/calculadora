# Calculadora - README

## Tecnologias Utilizadas

- Node.js
- Express

## Descrição do Projeto

Este projeto é uma calculadora simples que permite realizar operações de soma, subtração, multiplicação e divisão através de endpoints REST. O servidor é construído com o Node.js usando o framework Express para gerenciar as rotas.

## Como Usar

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone este repositório para sua máquina local.

3. Abra um terminal ou prompt de comando e navegue até o diretório raiz do projeto.

4. Execute o seguinte comando para instalar as dependências necessárias:

```
npm install
```

5. Após a instalação das dependências, execute o servidor com o seguinte comando:

```
node src/server.js
```

6. O servidor estará rodando em http://localhost:3000/.

7. Abra um navegador e acesse os seguintes endpoints para usar a calculadora:

- Soma: http://localhost:3000/soma/{num1}/{num2}
  Substitua `{num1}` e `{num2}` pelos números que deseja somar.
  Exemplo: http://localhost:3000/soma/5/3

- Subtração: http://localhost:3000/subtracao/{num1}/{num2}
  Substitua `{num1}` e `{num2}` pelos números que deseja subtrair.
  Exemplo: http://localhost:3000/subtracao/10/5

- Multiplicação: http://localhost:3000/multiplicacao/{num1}/{num2}
  Substitua `{num1}` e `{num2}` pelos números que deseja multiplicar.
  Exemplo: http://localhost:3000/multiplicacao/2/4

- Divisão: http://localhost:3000/divisao/{num1}/{num2}
  Substitua `{num1}` e `{num2}` pelos números que deseja dividir.
  Exemplo: http://localhost:3000/divisao/10/2


* O projeto poderá ser utilizado via Postman, Insomnia ou qualquer outro software para consulta de API's.

## Observações

- Certifique-se de que os números sejam passados corretamente na URL, caso contrário, você receberá mensagens de erro.
- O botão "Página Inicial" em cada página de resultado redireciona para a página inicial (http://localhost:3000/).

Agora você pode utilizar a calculadora simples acessando os endpoints mencionados. Lembre-se de que este é um projeto de demonstração e não inclui tratamento de erros avançados ou validações adicionais.
