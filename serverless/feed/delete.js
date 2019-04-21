'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs-then');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.delete = (event, context, callback) => {
  const timestamp = new Date().getTime();
  // const data = JSON.parse(event.body);
  let id = event.pathParameters.id;
    
    const params = {
      TableName: process.env.FEED_TABLE,
      Key: {
          "id": id,
      },
    };
    
    // write the todo to the database
    dynamoDb.delete(params, (error) => {
      // handle potential errors
      if (error) {
        console.error(error);
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Couldn\'t delete the follow item.',
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
          body: JSON.stringify(id),
        };
        callback(null, response);
      });
  
}
