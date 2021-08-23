const mongoose = require(`mongoose`);

/**
 * @title mongodb connect and disconnect function
 * @param {object} mongoConfig contains mongo specific config
 */
module.exports = {
	"connect": async(mongoConfig) => {
		await mongoose.connect(mongoConfig.url, mongoConfig.options);
	},
	"disconnect": async() => {
		await mongoose.connection.close();
	},
};
