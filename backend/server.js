const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()

const uri = "mongodb+srv://dbuser:dbuser@robofriends.bldea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('robofriends')
    const robosCollection = db.collection('robos')

      app.put('/robos-up/:apiID', (req, res) => { 
        res = robosCollection.findOneAndUpdate(req.params, req.body).json
          .catch(error => console.error(error))
      });

      app.put('/robos-down/:apiID', (req, res) => { 
        res = robosCollection.findOneAndUpdate(req.params, req.body).json
          .catch(error => console.error(error))
      });

      app.get('/robos/:apiID', (req, res) => { 
        res = (robosCollection.find(req.params)).json
          .catch(error => console.error(error))
      });


    // ========================
    // Listen
    // ========================

    app.listen(process.env.PORT || 3000, function() {
        console.log('Listening on port 3000');
    });
  
    })
    .catch(console.error)