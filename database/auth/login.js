'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs-then');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.login = (event, context, callback) => {
  console.log(event.body);
  const loginData = JSON.parse(event.body);
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
        body: 'User does not exist!',
      });
      return;
    }

    let exists = false;
    // console.log(result.Items);
    const data = (result.Items);
    data.forEach((element) => {
      if(element.email == loginData.email){
          exists = true;
          
          comparePassword(loginData.password, element.passwordHash, element._id)
          .then((token) => {
            
            const response = {
              statusCode: 200,
              headers: {
                'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
              },
              body: token,
            };
            callback(null, response);
          }, (error) => {
            console.log("here");
            console.log(error);
              callback(null, {
                statusCode: 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'The credentials do not match.'
            });
          });
      }
      
    });
    
  });
};


function comparePassword(eventPassword, userPassword, userId) {
  return bcrypt.compare(eventPassword, userPassword)
    .then(passwordIsValid =>
      !passwordIsValid
        ? Promise.reject(new Error('The credentials do not match.'))
        : signToken(userId)
    );
}

function signToken(id) {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: 86400 // expires in 24 hours
  });
}