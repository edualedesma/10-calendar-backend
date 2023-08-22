const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async (req, res = response) => {

	const events = await Event.find()
							  .populate('user', 'name');

	res.json({
		ok: true,
		events
	});
};

const createEvent = async (req, res = response) => {
	
	const event = new Event( req.body );

	try {

		event.user = req.uid;
		
		const savedEvent = await event.save();

		res.json({
			ok: true,
			event: savedEvent
		});	
		
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Talk to the Admin'
		});
	}

	
};

const updateEvent = (req, res = response) => {
	// const { id } = req.body;
	// console.log(id);

	res.json({ //12345
		ok: true,
		msg: `updateEvent`
	});
};

const deleteEvent = (req, res = response) => {
	const { id } = req.body;
	console.log(id);

	res.json({ //12345
		ok: true,
		msg: 'deleteEvent'
	});
};

module.exports = {
	getEvents,
	createEvent,
	updateEvent,
	deleteEvent,
}