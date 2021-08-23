const { recordValidator } = require(`./index`);

describe(`validators recordValidator`, () => {
	it(`should return error`, async() => {
		const validateRes = await recordValidator({});
		const messages = validateRes.error.details.map(e => e.message);

		expect(messages).toEqual([`"endDate" is required`]);
	});
});
