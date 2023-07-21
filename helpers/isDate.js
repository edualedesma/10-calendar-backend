const moment = require('moment');

const isDate = ( value ) => {
	// console.log(value);
	// console.log(req, location, path);
	if ( !value ) {
		return false;
	}

	const date = moment( value );
	if ( date.isValid() ) {
		return true;
	}

	return false;

}

module.exports = {
	isDate
};