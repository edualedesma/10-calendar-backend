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

const updateEvent = async (req, res = response) => {
	
	const eventId = req.params.id;
	const uid = req.uid;

	try {

		const event = await Event.findById(eventId);

		if ( !event ) {
			res.status(500).json({
				ok: false,
				msg: 'The event does not exist'
			});
		}

		if ( event.user.toString() !== uid ) {
			return res.status(401).json({
				ok: false,
				msg: 'You do not have privileges to edit this event'
			});
		}

		const newEvent = {
			...req.body,
			user: uid
		}

		const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

		res.json({
			ok: true,
			event: updatedEvent
		});
		
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Talk to Admin'
		});
	}

};

const deleteEvent = async (req, res = response) => {
	const eventId = req.params.id;
	const uid = req.uid;

	try {

		const event = await Event.findById(eventId);

		if ( !event ) {
			res.status(500).json({
				ok: false,
				msg: 'The event does not exist'
			});
		}

		if ( event.user.toString() !== uid ) {
			return res.status(401).json({
				ok: false,
				msg: 'You do not have privileges in this event'
			});
		}

		await Event.findByIdAndDelete( eventId );

		res.json({
			ok: true,
		});
		
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Talk to Admin'
		});
	}
};

module.exports = {
	getEvents,
	createEvent,
	updateEvent,
	deleteEvent,
}