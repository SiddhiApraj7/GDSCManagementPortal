'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const projectRequests = require('./routes/projectRequests');
const collaboratorRequests = require('./routes/collaboratorRequests');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/requests', projectRequests.routes);
app.use('/requests', collaboratorRequests.routes);

app.get('/', (req,res) => {
    res.send('Welcome to GDSC Protal');
});

app.listen(3000, () => console.log('App is listening on url http://localhost:' + 3000));