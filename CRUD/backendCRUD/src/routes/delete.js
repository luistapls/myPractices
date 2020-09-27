const express = require('express');
const multer = require('multer');
const deleteWorker = require('../services/delete/deteleWorker');

const upload = multer();
const router = express.Router();

router.post('/delete', upload.none(), async (req, res) => {
  await deleteWorker(req);
  res.end();
});

module.exports = router;
