'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const request = require('request');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  console.log(data);
  const params = {
    TableName: process.env.USERS_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#name': 'name',
      '#mobile': 'mobile',
      '#bio': 'bio',
      '#image': 'image'
    },
    ExpressionAttributeValues: {
      ':image': data.image,
      ':name': data.name,
      ':bio': data.bio,
      ':mobile': data.mobile,
      ':checked': data.checked,
      ':updatedAt': timestamp,
    },
    UpdateExpression: 'SET #name = :name, #image = :image, #bio=:bio, #mobile = :mobile, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW',
  };

  
  // update the todo in the database
  dynamoDb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the todo item.',
      });
      return;
    }
    console.log(result);

      // create a response
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(result.Attributes),
      };

      callback(null, response);

  });
};