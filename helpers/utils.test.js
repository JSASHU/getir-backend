const { "utils" : { dateString } } = require(`./index`);

describe(`utils dateString`, () => {
	it(`should validate date string`, () => {
		[`1990-01-10`, `2000-01-01`].forEach(value => {
			expect(dateString.validate(value).error).toBeUndefined();
		});

		[`2021-06-21T08:28:22.000Z`].forEach(value => {
			expect(dateString.validate(value).error).toBeDefined();
		});
	});
});
