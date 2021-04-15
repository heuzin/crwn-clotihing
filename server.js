const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express;
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.length('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
};

app.listen(port, error => {
    if (error) throw error;
    console.log('server running on port ' + port)
});