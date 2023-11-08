const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// console.log( process.env );

// Create express server
const app = express();

// Database
dbConnection();

// CORS
app.use(cors());

// Public directory
app.use( express.static('public') );

// Reader and body parser
app.use( express.json() );

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.get('*', (req, res) => {
	res.sendFile( __dirname + '/public/index.html' );
});

// Listen requests
app.listen( process.env.PORT, () => {
	console.log(`Server is running on port ${ process.env.PORT }`);
} )