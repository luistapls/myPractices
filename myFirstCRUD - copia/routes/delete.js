const express = require('express');
const deleteWorker = require('../services/delete/deteleWorker');

const router = express.Router();

router.get('/delete', (req, res) => {
  res.sendFile(
    '/users/Luis/desktop/developer/myPractices/myFirstCRUD/views/delete.html',
  );
});

router.post('/delete-successful', async (req, res) => {
  await deleteWorker(req);
  res.redirect('/');
});

module.exports = router;
