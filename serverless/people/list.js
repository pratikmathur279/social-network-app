'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.list = (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log(data);
  const email = data.email;
  console.log(email);

  const params = {
    TableName: process.env.USERS_TABLE,
  };

// console.log(event.pathParameters.email);
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

    let finalResult = [];
    const list = result.Items;
    list.forEach((item)=> {
      if(item.email != email){
        finalResult.push(item);
      }
    })

    // create a response
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(finalResult),
    };
    callback(null, response);
  });
};
