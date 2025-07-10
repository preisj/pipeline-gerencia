const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.send('OK'));

app.listen(3001, () => console.log('Backend rodando na porta 3001'));
