const helpers = require(`./index`);

describe(`database`, () => {
	it(`should export 2 function`, () => {
		expect(Object.keys(helpers)).toEqual([
			`errors`,
			`utils`,
		]);
	});
});
