'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();

  console.log(event.pathParameters.email);
  const imageData = JSON.parse(event.body);
  console.log(imageData);

  const params = {
    TableName: process.env.FEED_TABLE,
  };

  dynamoDb.scan(params, (error, result) => {
    // console.log(result.Items);
    let feed = result.Items;

    feed.forEach((item) => {
        if(item.email === imageData.email){
            item.image = imageData.image;

            let params1 = {
                    TableName: process.env.FEED_TABLE,
                    Key: {
                      id: item.id,
                    },
                    ExpressionAttributeNames: {
                      '#name': 'name',
                      '#image': 'image',
                      '#email': 'email',
                      '#date': 'date',
                      '#message': 'message'
                    },
                    ExpressionAttributeValues: {
                      ':image': item.image,
                      ':name': item.name,
                      ':email': item.email,
                      ':date': item.date,
                      ':message': item.message,
                      ':updatedAt': timestamp,
                    },
                    UpdateExpression: 'SET #name = :name, #image = :image, #email=:email, #date = :date, #message = :message, updatedAt = :updatedAt',
                    ReturnValues: 'ALL_NEW',
                  };

            dynamoDb.update(params1, (error, result) => {
                console.log(result);
            
                const response = {
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                    },
                    body: JSON.stringify("Updated!"),
                };
                callback(null, response);
            });      
        } 
    });
  });
};