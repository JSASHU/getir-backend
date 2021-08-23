const {
	"errors" : { InvalidRequestError },
} = require(`../helpers`);
const {
	"getir" : { records },
} = require(`../services`);
const {
	recordValidator,
} = require(`../validators`);

/**
 * @title find records based on given req.body params
 * @param {object} req Request object contains body {startDate, endDate, minCount, maxCount}
 * @param {object} res Response object
 */
module.exports = {
	"findRecords": async(req, res) => {
		try {
			const result = await recordValidator(req.body);

			if (typeof result.error !== `undefined`) {
				const messages = result.error.details.map(e => e.message);

				throw new InvalidRequestError(JSON.stringify(messages));
			}

			const rec = await records(req.body);

			res.send({
				"code"    : 0,
				"msg"     : `Success`,
				"records" : rec,
			});
		} catch (e) {
			res.send({
				"code"    : e.statusCode || 500,
				"msg"     : JSON.parse(e.errorMessage)[0],
				"records" : [],
			});
		}
	},
};
