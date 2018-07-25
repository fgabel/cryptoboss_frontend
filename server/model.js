
const { Pool} = require('pg')

const pool = new Pool({
  user: 'cryptob1_cryptoboss',
  host: 'nlss9.a2hosting.com',
  database: 'cryptob1_crawl',
  password: '12345',
  port: 5432,
})

exports.test = function (p1, p2) {
    return String(p1 * p2);              // The function returns the product of p1 and p2
};

exports.dbquery = function (query_) {

	pool.query(query_, (err, result) => {
  		if (err) {
    			console.log(err.stack)
  		} else {
res.send(result.rows)

			}
//pool.end()

					   })

  	
};


