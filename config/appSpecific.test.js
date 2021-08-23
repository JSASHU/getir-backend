const appSpecific = require(`./appSpecific`);

describe(`config appSpecific`, () => {
	it(`has 2 exported values`, () => {
		expect(Object.keys(appSpecific)).toEqual([`development`, `test`]);
	});
});
