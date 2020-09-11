const express = require('express');
const uploadWorker = require('../services/update/updateWorker');

const router = express.Router();

router.get('/update', (req, res) => {
  res.sendFile(
    '/users/Luis/desktop/developer/myPractices/myFirstCRUD/views/update.html',
  );
});

router.post('/update-process', async (req, res) => {
  await uploadWorker(req);
  res.redirect('/');
});

module.exports = router;
