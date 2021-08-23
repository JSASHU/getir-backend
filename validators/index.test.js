const validators = require(`./index`);

describe(`validators`, () => {
	it(`should export 1 function`, () => {
		expect(Object.keys(validators)).toEqual([`recordValidator`]);
	});
});
