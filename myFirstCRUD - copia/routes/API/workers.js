const express = require('express');
const allEmployees = require('../../services/API/returnAll');
const oneEmployee = require('../../services/API/returnOne');

const router = express.Router();

router.get('/api/workers', async (req, res) => {
  res.json(await allEmployees());
});

router.get('/api/workers/:id', async (req, res) => {
  res.json(await oneEmployee(req));
});

module.exports = router;
