const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 3005;
const uuid = require('uuid');

var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});


app.listen(port, () => {
    console.log('Server running on ' + port);
});

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.all('/*', function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    if (request.method == 'OPTIONS') {
        response.status(200).end();
    } else {
        next();
    }
});

app.get('/users', function(req, res){
    var params = {
        TableName: 'social-network-app-users',
      };
      
      // Call DynamoDB to add the item to the table
      ddb.scan(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log(data.Items[0].email);
        }
      });
});

app.post('/users', function(req, res){
    console.log(req.body.email);
    const timestamp = new Date().getTime().toString();

    var params = {
        TableName: 'social-network-app-users',
        Item: {
            'id': {S: uuid.v1()},
            'email': {S: req.body.email},
            'password': {S: req.body.password},
            'createdAt': {S : timestamp}
        }
      };
      
      // Call DynamoDB to add the item to the table
      ddb.putItem(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
        //   console.log(data);
        res.send(req.body.email);
        }
      });
});

module.exports = app;



