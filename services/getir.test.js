const env = process.env.NODE_APP;
const { database } = require(`../config`);

const { connect, disconnect } = require(`../database/mongo`);
const { records } = require(`./getir`);

beforeAll(async()=>{
	await connect(database[env].mongo);
});

afterAll(async()=>{
	await disconnect(database[env].mongo);
});

describe(`services getir`, () => {
	it(`should get empty records from db`, async() => {
		let rec = await records({
			"endDate"   : `2021-02-02`,
			"maxCount"  : 3000,
			"minCount"  : 2700,
			"startDate" : `2021-01-26`,
		});

		expect(rec).toEqual([]);
	});
	it(`should get one records from db`, async() => {
		let rec = await records({
			"endDate"   : `2016-02-02`,
			"maxCount"  : 3000,
			"minCount"  : 2700,
			"startDate" : `2016-01-26`,
		});

		expect(rec[0]).toHaveProperty(`createdAt`);
		expect(rec[0]).toHaveProperty(`key`);
		expect(rec[0]).toHaveProperty(`totalCount`);
	});
});
