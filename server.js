var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.listen(PORT, function() {
    console.log("App running on port " + PORT);
});

app.get('/',function(req,res){
    res.render('index');
});