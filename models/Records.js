const mongoose = require(`mongoose`);

const recordSchema = mongoose.Schema({
	"counts": [
		{
			"type": Number,
		},
	],
	"createdAt": {
		"type": Date,
	},
	"key": {
		"key": String,
	},
	"value": {
		"type": String,
	},
});

module.exports = mongoose.model(`records`, recordSchema);
