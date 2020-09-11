const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(
    '/users/Luis/desktop/developer/myPractices/myFirstCRUD/views/home.html',
  );
});

module.exports = router;
