const mongoose = require('mongoose');

const { WORKERS_APP_MONGODB_HOST, WORKERS_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${WORKERS_APP_MONGODB_HOST || 'localhost'}/${
  WORKERS_APP_MONGODB_DATABASE || 'workers-db-app'
}`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log('Mongodb is connected to', db.connection.host))
  .catch((err) => console.error(err));
