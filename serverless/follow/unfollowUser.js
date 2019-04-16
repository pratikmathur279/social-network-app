'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs-then');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.delete = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
    console.log(data);
    let id = '';

    const params1 = {
        TableName: process.env.FOLLOW_TABLE,
    };

    dynamoDb.scan(params1, (error, result) => {
        const allFollow = result.Items;
        console.log(allFollow);
        
        allFollow.forEach((item)=> {
            if(item.fromId == data.fromId && item.toId == data.toId){
                id = item.id;
                console.log(id);

                const params = {
                    TableName: process.env.FOLLOW_TABLE,
                    Key: {
                        "id": id,
                    },
                  };
                  console.log(params);
              
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
        });
    });
      
}
