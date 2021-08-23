const config = require(`./index`);

describe(`config`, () => {
	it(`should export 2 function`, () => {
		expect(Object.keys(config)).toEqual([
			`appSpecific`,
			`database`,
		]);
	});
});
