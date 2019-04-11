'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  let data1 = JSON.parse(event.body);
  console.log(data1);

const params = {
    TableName: process.env.PEOPLE_TABLE,
  };

  let userEmail = data1.data.email;

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
    // console.log(data);
    let userData;
    data.forEach((element) => {
        if(element.email == userEmail){
            userData = element;
        }
    })

    console.log(userData);
    userData.image = data1.data.image;

  const params1 = {
    TableName: 'social-network-app-people',
    Key: {
      id: userData.id,
    },
    ExpressionAttributeNames: {
      '#name': 'name',
      '#email': 'email',
      '#image': 'image'
    },
    ExpressionAttributeValues: {
      ':image': data1.data.image,
      ':name': data1.data.name,
      ':email': data1.data.email,
      ':checked': data1.data.checked,
      ':updatedAt': timestamp,
    },
    UpdateExpression: 'SET #name = :name, #image = :image, #email=:email, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW',
  };

  // update the todo in the database
  dynamoDb.update(params1, (error, result) => {
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
  });
}