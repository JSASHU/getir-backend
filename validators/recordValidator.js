const Joi = require(`joi`);
const { "utils" : { dateString } } = require(`../helpers`);

module.exports = (body)=> {
	return Joi.object({
		"endDate"   : dateString.required(),
		"maxCount"  : Joi.number().greater(Joi.ref(`minCount`)).required(),
		"minCount"  : Joi.number().required(),
		"startDate" : dateString.required(),
	}).validate(body);
};
