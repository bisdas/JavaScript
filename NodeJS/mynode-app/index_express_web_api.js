//Express webservice api

const express = require('express');
const app = express();
const USERS = require('../mock-data/profiles');


/////////////////////////////////////////////////////////////
app.get('/', function (req, res) {
    res.end('Profil App');
})
app.get('/api/profiles', function (req, res) {
    res.status(200).json(USERS);
})

app.get('/api/profiles/:id', function (req, res) {
    res.status(200).json({
        message: 'BY id'
    });
})
app.post('/api/profiles', function (req, res) {
    res.status(200).json({
        message: 'POst is called'
    });
})
app.delete('/api/profiles', function (req, res) {
    res.status(200).json({
        message: 'delete is called'
    });
})
app.put('/api/profiles', function (req, res) {
    res.status(200).json({
        message: 'update is called'
    });
})



///////////////////////////////////////////////////////////


app.listen(8080, function () {
    console.log('Express Server is Ready!');
})