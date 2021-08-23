const joi = require(`joi`);

const dateString = joi.
	string().
	trim().
	regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/u).
	message({"string.pattern.base": `Please privide date in YYYY-MM-DD format.`});

module.exports = {
	dateString,
};
