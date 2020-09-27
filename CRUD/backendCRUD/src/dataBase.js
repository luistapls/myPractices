const mongoose = require('mongoose');

/* const { WORKER_MONGODB_HOST, WORKER_MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${WORKER_MONGODB_HOST || 'localhost'}/${
  WORKER_MONGODB_DATABASE || 'dbWorker'
}`; */

mongoose
  .connect('mongodb://localhost/dbWorker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log('Mongodb is connected to', db.connection.host))
  .catch((err) => console.error(err));
