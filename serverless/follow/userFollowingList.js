'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
  
console.log(event.pathParameters.email);
  let finalList = [], tempList = [];

  //Fetch entire following list
  const params1 = {
    TableName: 'social-network-app-follow',
  }

  dynamoDb.scan(params1, (error, result) => {
    let list = result.Items;

    const params = {
      TableName: 'social-network-app-users',
    };

    dynamoDb.scan(params, (error, result1)=>{
      let data = result1.Items;

      data.forEach((element) => {
        if(element.email === event.pathParameters.email){
          let user = element;

          list.forEach((item) => {
            if(item.fromId == user.id){
              tempList.push(item);
            }
          }); 
          console.log(tempList);
          
        }
      });

      data.forEach((e1) => {
        tempList.forEach((temp) => {
          if(temp.toId == e1.id){
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
  });
};
