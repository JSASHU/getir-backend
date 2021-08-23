const models = require(`./index`);

describe(`database`, () => {
	it(`should export 1 function`, () => {
		expect(Object.keys(models)).toEqual([`Records`]);
	});
});
