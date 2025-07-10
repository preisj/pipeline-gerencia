const app = require('./app');

const port = process.env.PORT || 3001;
const basePath = process.env.ENV_PREFIX || '';

app.listen(port, () => {
  console.log(`Backend rodando em ${basePath} na porta ${port}`);
});



