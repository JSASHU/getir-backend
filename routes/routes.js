const {
	"getir" : { findRecords },
} = require(`../controllers`);

module.exports = (app) => {
	// All getir related routes
	app.post(`/records`, findRecords);
};
