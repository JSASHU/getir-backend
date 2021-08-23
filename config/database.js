// Database Specific configurations
module.exports = {
	"development": {
		"mongo": {
			"options": {
				"useNewUrlParser"    : true,
				"useUnifiedTopology" : true,
			},
			"url": `mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.` +
				`mongodb.net/getir-case-study?retryWrites=true`,
		},
	},
	"test": {
		"mongo": {
			"options": {
				"useNewUrlParser"    : true,
				"useUnifiedTopology" : true,
			},
			"url": `mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.` +
				`mongodb.net/getir-case-study?retryWrites=true`,
		},
	},
};
