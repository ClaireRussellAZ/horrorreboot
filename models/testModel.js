var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var TestSchema = new Schema({
    key:{type:String}
});

// This creates our model from the above schema, using mongoose's model method
var Test = mongoose.model("test", TestSchema);

// Export the User model
module.exports = Test;
