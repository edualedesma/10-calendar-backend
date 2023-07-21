const { response } = require('express');

const getEvents = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'getEvents'
	});
};

const createEvent = (req, res = response) => {
	const { id } = req.body;

	// console.log(req.body);

	res.json({ //12345
		ok: true,
		msg: `createEvent ${id}`
	});	
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