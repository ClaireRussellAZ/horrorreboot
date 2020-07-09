//var db = require("../models");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/horrorstoriesdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("horrorstoriesdb");
  var query = {};
  dbo.collection("stories").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

//console.log(db)
// console.log(db.Test)
// console.log(db.Test.find)

// db.Test.find({},function(err,docs){
  // console.log (err,docs)//
// })


module.exports = function (app) {
  app.get("/api/test", function(req,res){
    // db.Story.find({},function(err,docs){
    //   console.log (docs)
    //   res.json({find:true});
    // })
  })
  // route used for checking user info during login
  app.get("/api/stories", function(req,res){
    // search User table for one item where email & password matches req.body
    res.send("meow");
  })
  // route used to register a new user
  app.post("/api/user", function(req,res){
    // create an item in User with values taken from req.body

  })

  // route used to get information from a specific user
  app.get("/api/user/:id", function(req,res){
    // find a specific user by where id matches req.params.id
   
  })

  // route used to update information for a specific user
  app.put("/api/user/:id", function(req,res){
    // update a row in User table where id matches req.params.id with new values from req.body
    
  })

  // route used to get all events made by user
  app.get("/api/user/:id/events", function(req,res){
    // search Event table for all events where hostId matches req.params.id
   
  })

  // route used to get all events the user is attending
  app.get("/api/user/:id/attending", function(req,res){
    // search UserEvent table where UserId matches req.params.id
   
  })

  // route used to get all events
  app.get("/api/event", function(req,res){
    // search Event table for all events
    
  })

  // route used to create a new event
  app.post("/api/event", function(req,res){
    // create a new event with columns and values specified in req.body
    
  })

  // route used to get 
  app.put("/api/event/:id", function(req,res){
    // update an event's data with new values specified in req.body where event.id matches req.params.id
  
  })

  // route used to delete an event
  app.delete("/api/event/:id", function(req,res){
    // completely remove an item in the Event table where event.id matches req.params.id
    
  })

  // route used to get attendees for a specific event
  app.get("/api/event/:id/attendees", function(req,res){
    // search UserEvent table where EventId matches req.params.id
   
  })

  // route used to attend an event
  app.post("/api/attend", function(req,res){
    // check UserEvent if a row exists that matches req.body
    
  })

  // route used to unattend an event
  app.delete("/api/attend", function(req,res){
    // remove a row in UserEvent where UserId and EventId matches req.body
    
  })
}