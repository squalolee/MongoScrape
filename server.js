var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.listen(PORT, function() {
    console.log("App running on port " + PORT);
});

app.get('/',function(req,res){
    res.render('scrape');
});