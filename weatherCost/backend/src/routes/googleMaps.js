const express = require('express');
const dataGoogleMaps = require('../services/googleMaps/index');

const router = express.Router();

router.get('/api/googleMaps/:coord1/:coord2', async (req, res) => {
  // res.json(await dataGoogleMaps(req));
  await dataGoogleMaps(req);
});

module.exports = router;
