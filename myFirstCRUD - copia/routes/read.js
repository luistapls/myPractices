const express = require('express');
const returnRead = require('../services/read/returnRead');

const router = express.Router();

router.get('/read', (req, res) => {
  res.sendFile(
    '/users/Luis/desktop/developer/myPractices/myFirstCRUD/views/read.html',
  );
});

router.post('/read-successful', async (req, res) => {
  res.send(await returnRead(req));
});

module.exports = router;
