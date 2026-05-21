
var fs = require('fs');
var rooms_data = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

//Get rooms view
const rooms = (req, res) => {
	res.render('rooms', { title: 'Travlr Getaways', rooms_data });
};

module.exports = {
	rooms
};
