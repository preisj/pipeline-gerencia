const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');

const basePath = process.env.ENV_PREFIX || '';
app.use(express.json());

app.get(`${basePath}/health`, (_, res) => res.send('OK'));
app.use(`${basePath}/users`, usersRoutes);

module.exports = app;

