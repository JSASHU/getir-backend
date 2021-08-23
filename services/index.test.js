const services = require(`./index`);

describe(`services`, () => {
	it(`should export 1 function`, () => {
		expect(Object.keys(services)).toEqual([`getir`]);
	});
});
