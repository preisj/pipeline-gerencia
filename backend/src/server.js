const express = require('express');
const app = express();
app.use(express.json());

const ENV_PREFIX = process.env.ENV_PREFIX || '';

app.get(`${ENV_PREFIX}/health`, (req, res) => res.send('OK'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT} com prefixo ${ENV_PREFIX}`);
});



