const express = require('express');
const multer = require('multer');
const saveWorker = require('../services/create/saveWorker');

const upload = multer();
const router = express.Router();

router.post('/create', upload.none(), async (req, res) => {
  await saveWorker(req);
  res.end();
});

module.exports = router;
