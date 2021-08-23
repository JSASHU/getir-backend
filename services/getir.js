const Record = require(`../models/Records`);

/**
 * @title records find service
 * @param {object} params object contains {startDate, endDate, minCount, maxCount}
 * @return {array} rec contains records array
 */
const GetirService = {
	async records(params) {
		const { startDate, endDate, minCount, maxCount } = params;

		const rec = await Record.aggregate([
			{
				"$project": {
					"_id"        : false,
					"createdAt"  : 1,
					"key"        : 1,
					"totalCount" : {
						"$reduce": {
							"in"           : { "$add": [`$$value`, `$$this`] },
							"initialValue" : 0,
							"input"        : `$counts`,
						},
					},
				},
			},
			{
				"$match": {
					"$and": [
						{ "createdAt": { "$gte": new Date(startDate), "$lte": new Date(endDate) } },
						{ "totalCount": { "$gt": minCount, "$lt": maxCount } },
					],
				},
			},
		]).exec();

		return rec;
	},
};

module.exports = GetirService;
