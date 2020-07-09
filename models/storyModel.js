var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var StorySchema = new Schema({

  id: {
    type: String,
    trim: true,
    required: "name is Required"
  },

  name: {
    type: String,
    trim: true,
    required: "name is Required"
  },

  creator: {
    type: String,
    trim: true,
    required: "name is Required"
  },
  
  "creator-version" : {
    type: String,
    trim: true,
    required: "name is Required"
  },

  startnode: {
    type: String,
    trim: true,
    required: "name is Required"
  },

  passages: [{
    
  }
    
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Story = mongoose.model("Story", StorySchema);

// Export the User model
module.exports = Story;
