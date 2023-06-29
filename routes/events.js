/* 
	Events routes
	host + /api/events
*/

const express = require('express');
const router = express.Router();
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { jwtValidate } = require('../middlewares/jwt-validation');

// All routes have to use jwtValidate middleware
router.use( jwtValidate );

// Get events
router.get('/', getEvents );

// Create new event
router.post('/', createEvent );

// Update event
router.put('/:id', updateEvent);

// Delete event
router.delete('/:id', deleteEvent);

module.exports = router;