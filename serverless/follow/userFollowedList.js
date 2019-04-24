'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: 'social-network-app-users',
  };

  let finalList = [], tempList = [];
console.log(event.pathParameters.email);
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
            console.log(user);

            const params1 = {
                TableName: 'social-network-app-follow',
            }

            dynamoDb.scan(params1, (error, result) => {
                const list = result.Items;

                list.forEach((item)=> {
                    if(item.toId == user.id){
                        tempList.push(item);
                    }
                });

                data.forEach((e1) => {
                  tempList.forEach((temp) => {
                    if(temp.fromId == e1.id){
                      finalList.push(e1);
                    }
                  });
                });
                
                const response = {
                    statusCode: 200,
                    headers: {
                      'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(finalList),
                  };
                  callback(null, response);
            });
        }
    })
    // create a response
    
  });
};
