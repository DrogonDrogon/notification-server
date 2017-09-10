const express = require('express');
const bodyParser = require('body-parser');

const router = require('../controllers/router');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', router);
app.listen(port, () => {
  console.log('listening on port 3000!');
});
