'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.followUser = (event, context, callback) => {
    const data = JSON.parse(event.body);
    const timestamp = new Date().getTime();

  const params = {
    TableName: process.env.USERS_TABLE,
  };

console.log(event.pathParameters.email);
console.log(data.userId);
let userId = data.userId;
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
    console.log(data);
    let user;
    data.forEach((element) => {
        if(element.email == event.pathParameters.email){
            user = element;
            let following = user.followingUser.split(",");
            console.log(following);
            following.push(userId);
            console.log(following);
            user.followingUser = following.join(',');

            const totalFollowers = following.length;
            const params1 = {
                TableName: process.env.USERS_TABLE,
                Key: {
                  id: user.id,
                },
                ExpressionAttributeNames: {
                  '#name': 'name',
                  '#mobile': 'mobile',
                  '#bio': 'bio',
                  '#image': 'image',
                  '#followingUser': 'followingUser'
                },
                ExpressionAttributeValues: {
                  ':image': user.image,
                  ':name': user.name,
                  ':bio': user.bio,
                  ':mobile': user.mobile,
                  ':followingUser': user.followingUser,
                  ':checked': user.checked,
                  ':updatedAt': timestamp,
                },
                UpdateExpression: 'SET #name = :name, #image = :image, #bio=:bio, #mobile = :mobile, #followingUser = :followingUser, updatedAt = :updatedAt',
                ReturnValues: 'ALL_NEW',
              };
            
              
              // update the todo in the database
              dynamoDb.update(params1, (error, result) => {
            
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
        }
    });
    

  });
};
