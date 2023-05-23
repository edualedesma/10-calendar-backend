const express = require('express');
require('dotenv').config();

// console.log( process.env );

// Create express server
const app = express();

// Public directory
app.use( express.static('public') );

// Reader and body parser
app.use( express.json() );

// Routes
app.use('/api/auth', require('./routes/auth'));

// Listen requests
app.listen( process.env.PORT, () => {
	console.log(`Server is running on port ${ process.env.PORT }`);
} )