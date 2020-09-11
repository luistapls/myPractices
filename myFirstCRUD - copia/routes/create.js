const express = require('express');
const saveEmployee = require('../services/create/saveEmployee');

const router = express.Router();

router.get('/create', (req, res) => {
  res.sendFile(
    '/users/Luis/desktop/developer/myPractices/myFirstCRUD/views/create.html',
  );
});

router.post('/create-successful', async (req, res) => {
  await saveEmployee(req);
  res.redirect('/');
});

module.exports = router;
