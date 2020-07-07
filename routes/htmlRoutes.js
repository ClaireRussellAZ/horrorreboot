module.exports = function (app, path) {
    // html routes to individual pages
    app.get("/", function(req,res) {
      res.sendFile(path.join(__dirname, "/view/index.html"));
    })
  }
  