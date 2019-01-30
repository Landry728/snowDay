const express = require('express');
const path = require('path');

const app = express();
const port = '3000';

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/looks');
});

app.use(express.static(path.join(__dirname, '/looks')));
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
