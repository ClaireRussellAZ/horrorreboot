var express = require("express");
var app = express();
var path = require("path");
const PORT = process.env.PORT || 3005;
var mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/horrorstoriesdb", { useNewUrlParser: true });


// set static root directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/apiRoutes.js")(app);
//require("./routes/htmlRoutes.js")(app, path);//



//app.get('*',function(req, res) {
 // res.sendFile(path.join(__dirname, "./public/view/index.html"));
//});
// Requiring our models for syncing
///var db = require("./models");//

// Syncing our sequelize models and then starting our Express app
// db.sequelize.sync().then(function () {
//   var something
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);

//   });
// });
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);

});