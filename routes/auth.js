/* 
	Rutas de usuarios / auth
	host + /api/auth
*/

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json({
		ok: true
	});
});

module.exports = router;