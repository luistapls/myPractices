const express = require('express');

// Initializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.use(require('./routes/workers'));

// Server is listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});

module.exports = app;
