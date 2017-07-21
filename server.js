// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express Configuration
//express server
var app = express();


// Sets an initial port.
var PORT = process.env.PORT || 3000;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Route files

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
