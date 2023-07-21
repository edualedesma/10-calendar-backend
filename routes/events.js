/* 
	Events routes
	host + /api/events
*/

const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { fieldsValidation } = require('../middlewares/fields-validation');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { jwtValidate } = require('../middlewares/jwt-validation');
const { isDate } = require('../helpers/isDate');

// All routes have to use jwtValidate middleware
router.use( jwtValidate );

// Get events
router.get('/', getEvents );

// Create new event
router.post(
	'/', 
	[
		check('title', 'Title is required').not().isEmpty(),
		check('start', 'Start date is required').custom( isDate ),
		check('end', 'End date is required').not().isEmpty(),
		fieldsValidation
	], 
	createEvent
);

// Update event
router.put('/:id', updateEvent);

// Delete event
router.delete('/:id', deleteEvent);

module.exports = router;