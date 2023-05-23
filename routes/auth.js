/* 
	Rutas de usuarios / auth
	host + /api/auth
*/

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { fieldsValidation } = require('../middlewares/fields-validation');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

router.post(
	'/new', 
	[ // middlewares
		check('name', 'User name is required').not().isEmpty(),
		check('email', 'Email is required').isEmail(),
		check('password', 'Password is required').isLength(6),
		fieldsValidation
	], 
	createUser);

router.post(
	'/', 
	[ // middlewares
		check('email', 'Email is required').isEmail(),
		check('password', 'Password is required').isLength(6),
		fieldsValidation
	], 
	loginUser);

router.get('/renew', renewToken);

module.exports = router;