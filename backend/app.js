const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()

const uri = "mongodb+srv://dbuser:dbuser@robofriends.bldea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('robofriends')
    const robosCollection = db.collection('robos')


      
  
      
      app.put('/robos/:id', (req, res) => { 
        robosCollection.findOneAndUpdate(req.params)
          .catch(error => console.error(error))
      })

      app.get('/robos/:id', (req, res) => { 
        robosCollection.find(req.params)
          .catch(error => console.error(error))
      })

      app.get('/robos', (req, res) => { 
        const votes = robosCollection.find().toArray
        res.send(votes.reduce((a, b) => a+b) / votes.length)
          .catch(error => console.error(error))
      })
  
      
      


    // ========================
    // Listen
    // ========================

    app.listen(process.env.PORT || 3000, function() {
        console.log('Listening on port 3000');
    });
  
    })
    .catch(console.error)