
//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const tripsEndpoint = 'http://127.0.0.1:3000/api/trips';
const options = {
	method: 'GET',
	headers: {
		'Accept': 'application/json'
	}
}


//console.log(trips);

//Get travel view
const travel = async function (req, res, next) {
	console.log('beginning travel controller');
	await fetch(tripsEndpoint, options)
		.then(res => res.json())
		.then(json => {
            let message = null;
            if( !(json instanceof Array) ) {
		message = 'API lookup error';
		json = [];
            } else {
            	if( !json.length ) {
			message = "No trips exist in database!";
		}
            }
			res.render('travel', { title: 'Travlr Getaways', trips: json, message } );
		})
		.catch(err => res.status(500).send(err.message) );
};


module.exports = {
	travel
};
