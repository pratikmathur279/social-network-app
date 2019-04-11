'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs-then');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  var hashPassword;
  bcrypt.hash(data.password, 8).then(hash =>{
    console.log(hash);
    hashPassword = hash;

    const params = {
      TableName: process.env.USERS_TABLE,
      Item: {
        id: uuid.v1(),
        email: data.email,
        name: data.name,
        image: 'no-image.png',
        bio: 'This is a temporary bio',
        mobile: data.mobile,
        password: data.password,
        passwordHash: hashPassword,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    };
  
    // write the todo to the database
    dynamoDb.put(params, (error) => {
      // handle potential errors
      if (error) {
        console.error(error);
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Couldn\'t create the people item.',
        });
        return;
      }
      
      const params1 = {
        TableName: 'social-network-app-people',
        Item: {
          id: uuid.v1(),
          email: data.email,
          name: data.name,
          image: params.Item.image,
          createdAt: timestamp,
          updatedAt: timestamp,
        },
      };

      dynamoDb.put(params1, (error)=> {
        if (error) {
          console.error(error);
          callback(null, {
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t create the people item.',
          });
          return;
        }
    
        const token = signToken(data.id);
        console.log(token);
    
        // create a response
        const response = {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
          },
          body: JSON.stringify(token),
        };
        callback(null, response);
      });
      
    });
  });
  
};

function signToken(id) {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: 86400 // expires in 24 hours
  });
}