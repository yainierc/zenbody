// Get dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const http = require('http');


const app = express();

//Define Promise for mongo since mongoose will be deprecate
mongoose.Promise = global.Promise;
// Connect to MongoDB
//var connString = 'mongodb://admin:0okmnji9@ds028310.mlab.com:28310/zenbodydb';
var connString = 'mongodb://zenbody:0okmnji9Q@' +
                  'cluster0-shard-00-00-al00u.mongodb.net:27017,'+
                  'cluster0-shard-00-01-al00u.mongodb.net:27017,' +
                 'cluster0-shard-00-00-al00u.mongodb.net:27017/zenbodydb'+
                 '?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
mongoose.connect(connString);
// Connection On
mongoose.connection.on('connected', ()=>{
  console.log('Connected to database mongodb @u.mongodb.net:27017');
});
mongoose.connection.on('error', (err)=>{
  if(err)
  {
     console.log('Error connecting to database mongodb @u.mongodb.net:27017 :' + err );
  }
});
// Get our API routes
const router = express.Router();
//API non authenticated
require('./server/controllers/scheduleCtrl')(router); 
require('./server/controllers/appointmentCtrl')(router); 
require('./server/controllers/scheduleTimeCtrl')(router); 
require('./server/controllers/servicesCtrl')(router); 
  
 

// Adding Middleware -cors
app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', router);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app;