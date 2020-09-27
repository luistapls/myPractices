const express = require('express');
const multer = require('multer');
const uploadWorker = require('../services/update/updateWorker');

const upload = multer();
const router = express.Router();

router.post('/update', upload.none(), async (req, res) => {
  await uploadWorker(req);
  res.end();
});

module.exports = router;
