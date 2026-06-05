
const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //register model
const Model = mongoose.model('trips');



//GET: /trips - lists all the trips
const tripsList = async(req, res) => {
	const q = await Model.find().exec();

	if(!q) {
		return res.status(404).json(err);
	}

	return res.status(200).json(q);
};


//GET: /trips - find trip matching code
const tripsFindByCode = async(req, res) => {
	//return single record
	const q = await Model.find({
		'code': req.params.tripCode
	}).exec();

	if(!q) {
		return res.status(404).json(err);
	}

	return res.status(200).json(q);
}

module.exports = {
	tripsList,
	tripsFindByCode
}
