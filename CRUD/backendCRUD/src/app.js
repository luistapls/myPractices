const express = require('express');
const cors = require('cors');
require('./dataBase');

// Initializacions
const app = express();

// Settings
app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 3000);

// Routes
app.use(require('./routes/apiWorkers'));
app.use(require('./routes/create'));
app.use(require('./routes/update'));
app.use(require('./routes/delete'));

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
