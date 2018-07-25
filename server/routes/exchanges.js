var express = require('express');
var router = express.Router();
var db = require('../model');

const { Pool} = require('pg')

const pool = new Pool({
  user: 'cryptob1_cryptoboss',
  host: 'nlss9.a2hosting.com',
  database: 'cryptob1_crawl',
  password: '12345',
  port: 5432,
})


// define the home page route
router.get('/', function(req, res) {
  var querystring = 'SELECT * FROM exchange_volumes';

const query_ = {
  // give the query a unique name
  name: 'fetch-country',
  text: querystring,
  //values: conditions.values
}


pool.query(query_, (err, result) => {
  if (err) {
    console.log(err.stack)
  		} else {
console.log(req.query)
console.log(querystring)
    console.log(result.rows.length)
var arr_ = []
for (var i = 0; i < result.rows.length; i++) {
    arr_.push(result.rows[i]['HitBTC'])
    //Do something
}

    res.send(arr_)
  		}
pool.end()
	})
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
