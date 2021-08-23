const database = require(`./index`);

describe(`database`, () => {
	it(`should export 1 function`, () => {
		expect(Object.keys(database)).toEqual([`mongo`]);
	});
});
