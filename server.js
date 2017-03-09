var express = require('express');
var app = express();
var port = 6060;

app.use(express.static(__dirname + "/app"));

app.listen(port, function() {
    console.log("listening on port:" + port);
});

//==== GET routes ==============================

/*
/api/todos (get) - your AngularJS service will use this to query MongoDB for all saved todos

/api/todo (post) - your AngularJS service will use this to save a todo to the database

/api/todo (put) - your AngularJS service will use this to update a saved todo in the database

* (get) - will load your single HTML page in app/index.html. Make sure you put this after all other GET routes

*/