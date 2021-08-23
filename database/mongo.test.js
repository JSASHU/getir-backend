const env = process.env.NODE_APP;
const { connect, disconnect } = require(`./mongo`);
const { database } = require(`../config`);

describe(`datbase mongo`, () => {
	it(`should connect to mongo`, async() => {
		await connect(database[env].mongo);
	});
	it(`should disconnet to mongo`, async() => {
		await disconnect(database[env].mongo);
	});
});
