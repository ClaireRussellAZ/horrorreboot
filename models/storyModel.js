var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var StorySchema = new Schema({

  name: {
    type: String,
    trim: true,
    required: true
  },

  creator: {
    type: String,
    trim: true,
    required: false
  },
  
  creatorVersion : {
    type: String,
    trim: true,
    required: false
  },

  startnode: {
    type: String,
    trim: true,
    required: false
  },

  passages: [{
    
  }
    
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Story = mongoose.model("Story", StorySchema);

// Export the User model
module.exports = Story;
