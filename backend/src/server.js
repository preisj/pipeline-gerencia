const express = require('express');
const app = express();

const ENV_PREFIX = process.env.ENV_PREFIX || '';
const basePath = process.env.ENV_PREFIX || '';

app.use(express.json());

app.get(`${ENV_PREFIX}/health`, (req, res) => res.send('OK'));
app.get(`${basePath}/health`, (req, res) => res.send('OK'));

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port} com basePath ${basePath}`);
});



