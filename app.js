const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}!`));
