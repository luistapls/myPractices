const express = require('express');
const dataDeliveryGoogle = require('../services/dataGoogle/index');

const router = express.Router();

router.get('/api/google/:coord1/:coord2', async (req, res) => {
  res.json(await dataDeliveryGoogle(req));
});

module.exports = router;
