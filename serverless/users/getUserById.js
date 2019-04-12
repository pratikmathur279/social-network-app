'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: process.env.USERS_TABLE,
  };

    console.log(event.pathParameters.id);
  // fetch todo from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the user item.',
      });
      return;
    }

    const data = (result.Items);
    let user;
    data.forEach((element) => {
        if(element.id == event.pathParameters.id){
            user = element;
        }
    })

    Object.keys(user).forEach(function(key){
        if(key == 'password' || key == 'passwordHash')
          delete user[key];
      });
      console.log(user);
    // create a response
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    };
    callback(null, response);
  });
};
