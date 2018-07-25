//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
//var mysql = require("mysql");
var app = express();
var router = express.Router();

var exchanges = require('./routes/exchanges');



// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });







//GET API
app.use('/exchanges', exchanges);
app.get("/", function(req , res){


                   res.send('No route given');


                //executeQuery (query_, res);
var params = req.query // req.query datatype:object (smilar to dict), keys can be accessed by var keyNames = Object.keys(myObject);
//var conditions = buildConditions(params);
console.log(typeof req.query)


 			
});

function buildConditions(params) {
  var conditions = [];
  var values = [];
  var conditionsStr;
  console.log(typeof params)

  if (typeof params.continent !== 'undefined') {
    conditions.push("continent = $1");
    values.push(params.continent);
  }

  if (typeof params.population !== 'undefined') {
    conditions.push("population = $2");
    values.push(parseInt(params.population));
  }

  return {
    where: conditions.length ?
             conditions.join(' AND ') : '1',
    values: values
  };
}


// https://stackoverflow.com/questions/10720420/node-postgres-how-to-execute-where-col-in-dynamic-value-list-query?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
// https://stackoverflow.com/questions/4614255/rest-url-design-for-greater-than-less-than-operations?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
//https://vmokshagroup.com/blog/building-restful-apis-using-node-js-express-js-and-ms-sql-server/
