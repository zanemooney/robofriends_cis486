import React from 'react';
var axios = require('axios');

const robo1up = document.getElementById("1-up");
const robo2up = document.getElementById("2-up");
const robo3up = document.getElementById("3-up");
const robo4up = document.getElementById("4-up");
const robo5up = document.getElementById("5-up");
const robo6up = document.getElementById("6-up");
const robo7up = document.getElementById("7-up");
const robo8up = document.getElementById("8-up");
const robo9up = document.getElementById("9-up");
const robo10up = document.getElementById("10-up");

const robo1down = document.getElementById("1-up");
const robo2down = document.getElementById("2-up");
const robo3down = document.getElementById("3-up");
const robo4down = document.getElementById("4-up");
const robo5down = document.getElementById("5-up");
const robo6down = document.getElementById("6-up");
const robo7down = document.getElementById("7-up");
const robo8down = document.getElementById("8-up");
const robo9down = document.getElementById("9-up");
const robo10down = document.getElementById("10-up");



robo1up.addEventListener('click', _ => {
  
    var data = JSON.stringify({
        "collection": "robos",
        "database": "robofriends",
        "dataSource": "roboFriends",
        "filter" : {"apiID" : 1},
        "update": { "$inc" : {"votes" : 1}}
    });
                
    var config = {
        method: 'post',
        url: 'https://data.mongodb-api.com/app/data-pjnkk/endpoint/data/beta/action/updateOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'zqrxA3vvBjReuWuyOgUC6Lh32Vx5ax2AMJmwPw0SmR9BLoVU6Cd0cnyjqSoqgb2r'
        },
        data : data
    };
  
  
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data)); // this line stores data; replace console.log with a variable and remove parenthesis
        })
        .catch(function (error) {
            console.log(error);
        });
  
  })

  






//  document.getElementById(`${id}-up`).addEventListener('click', _ => {
  
//   var data = JSON.stringify({
//       "collection": "robos",
//       "database": "robofriends",
//       "dataSource": "roboFriends",
//       "filter" : {"apiID" : 1},
//       "update": { "$inc" : {"votes" : 1}}
//   });
              
//   var config = {
//       method: 'post',
//       url: 'https://data.mongodb-api.com/app/data-pjnkk/endpoint/data/beta/action/updateOne',
//       headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Request-Headers': '*',
//           'api-key': 'zqrxA3vvBjReuWuyOgUC6Lh32Vx5ax2AMJmwPw0SmR9BLoVU6Cd0cnyjqSoqgb2r'
//       },
//       data : data
//   };


//   axios(config)
//       .then(function (response) {
//           console.log(JSON.stringify(response.data)); // this line stores data; replace console.log with a variable and remove parenthesis
//       })
//       .catch(function (error) {
//           console.log(error);
//       });

// })

// document.getElementById(`${id}-down`).addEventListener('click', _ => {
//   var data = JSON.stringify({
//     "collection": "robos",
//     "database": "robofriends",
//     "dataSource": "roboFriends",
//     "filter" : {"apiID" : 1},
//     "update": { "$inc" : {"votes" : -1}}
// });
            
// var config = {
//     method: 'post',
//     url: 'https://data.mongodb-api.com/app/data-pjnkk/endpoint/data/beta/action/updateOne',
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Request-Headers': '*',
//         'api-key': 'zqrxA3vvBjReuWuyOgUC6Lh32Vx5ax2AMJmwPw0SmR9BLoVU6Cd0cnyjqSoqgb2r'
//     },
//     data : data
// };


// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data)); // this line stores data; replace console.log with a variable and remove parenthesis
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// })








