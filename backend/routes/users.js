const express = require('express');
const router = express.Router();
const users = require('../data/users');

router.get('/', (req, res) => {
  res.json(users.getAll());
});

router.get('/:id', (req, res) => {
  const user = users.getById(Number(req.params.id));
  if (!user) return res.status(404).send('Not found');
  res.json(user);
});

router.post('/', (req, res) => {
  const user = users.create(req.body);
  res.status(201).json(user);
});

router.put('/:id', (req, res) => {
  const updated = users.update(Number(req.params.id), req.body);
  if (!updated) return res.status(404).send('Not found');
  res.json(updated);
});

router.delete('/:id', (req, res) => {
  const deleted = users.remove(Number(req.params.id));
  if (!deleted) return res.status(404).send('Not found');
  res.status(204).send();
});

module.exports = router;
