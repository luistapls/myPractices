const express = require('express');
const dataWorkers = require('../services/API/allData');
const oneWorkerData = require('../services/API/dataWorker');

const router = express.Router();

router.get('/api/workers', async (_req, res) => {
  res.json(await dataWorkers());
});

router.get('/api/workers/:id', async (req, res) => {
  res.json(await oneWorkerData(req));
});

module.exports = router;
