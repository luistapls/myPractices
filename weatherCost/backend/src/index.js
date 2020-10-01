const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3000);

app.use(require('./routes/api'));
app.use(require('./routes/deliveryGoogle'));

app.listen(app.get('port'), () => {
  console.log('Server on port: ', app.get('port'));
});
