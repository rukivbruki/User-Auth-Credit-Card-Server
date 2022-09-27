require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('helpers/jwt');
const errorHandler = require('helpers/error-handler');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(jwt());

app.use('/users', require('./users/users-controller'));

app.use(errorHandler);

const port =
  process.env.NODE_ENV === 'production' ? process.env.PORT || 80 : 4000;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
