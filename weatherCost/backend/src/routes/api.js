const express = require('express');
const dataDelivery = require('../services/vanilla/dataDelivery');

const router = express.Router();

router.get('/api/:coord1/:coord2', async (req, res) => {
  res.json(await dataDelivery(req));
});

module.exports = router;
