const express = require('express');
const path = require('path');

// Initializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(require('./routes/home'));
app.use(require('./routes/create'));
app.use(require('./routes/read'));
app.use(require('./routes/delete'));
app.use(require('./routes/update'));

// Server is listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});

module.exports = app;
