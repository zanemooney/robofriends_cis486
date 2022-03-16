var axios = require('axios');
var data = JSON.stringify({
    "collection": "robos",
    "database": "robofriends",
    "dataSource": "roboFriends",
    "filter" : {"apiID" : 1},
    "projection": {
        "_id" : 0,
        "votes" : 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-pjnkk/endpoint/data/beta/action/findOne',
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











// const express = require('express')
// const MongoClient = require('mongodb').MongoClient
// const app = express()

// const uri = "mongodb+srv://dbuser:dbuser@robofriends.bldea.mongodb.net/roboFriends?retryWrites=true&w=majority";

// MongoClient.connect(uri, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db('robofriends')
//     const robosCollection = db.collection('robos')

//       app.put('/robos-up/:apiID', (req, res) => { 
//         res = robosCollection.findOneAndUpdate(req.params, req.body).json
//           .catch(error => console.error(error))
//       });

//       app.put('/robos-down/:apiID', (req, res) => { 
//         res = robosCollection.findOneAndUpdate(req.params, req.body).json
//           .catch(error => console.error(error))
//       });

//       app.get('/robos/:apiID', (req, res) => { 
//         res = (robosCollection.find(req.params)).json
//           .catch(error => console.error(error))
//       });


//     // ========================
//     // Listen
//     // ========================

//     app.listen(process.env.PORT || 3000, function() {
//         console.log('Listening on port 3000');
//     });
  
//     })
//     .catch(console.error)