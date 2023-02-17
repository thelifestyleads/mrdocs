const express = require('express');
const app = express();
const cors = require('cors')
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const upload = require("express-fileupload");
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(express.static('files'));
app.use(express.static('../files'));
//app.use('files',require("express").static(__dirname + 'files')) 
//071 026 5510
app.use('../files',require("express").static(__dirname + 'files'))
app.use(cors());
app.use(upload());
app.use(cors())
const {auth} = require('./routes/auth')
const {route} = require('./routes/route');
const { login } = require('./context/firebase');
const mkdirp = require('mkdirp');
auth(app)
route(app)
app.get('/', (req, res) => {
    res.sendFile( __dirname + "/" + "index.html" );
});
server.listen(port, () => {
    console.log(`listening on ${port}...`);
    const made = mkdirp.sync('../files');
});