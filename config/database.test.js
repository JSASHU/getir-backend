const database = require(`./database`);

describe(`config database`, () => {
	it(`has 3 exported values`, () => {
		expect(Object.keys(database)).toEqual([`development`, `test`]);
	});
});
