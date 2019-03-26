'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.updateUserActivity = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  console.log(event);

  const params = {
    TableName: process.env.USERS_ACTIVITY_TABLE,
    Key: {
        email: event.pathParameters.email
    },
    UpdateExpression: "SET active=:active",
    ExpressionAttributeValues: {
        ":active": data.active
    },
    ReturnValues: "ALL_NEW"
  };

  // write the todo to the database
  dynamoDb.update(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the user item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};
