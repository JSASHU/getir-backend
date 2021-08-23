module.exports = {
	"collectCoverage"     : true,
	"collectCoverageFrom" : [`./**/*.js`],
	"coverageDirectory"   : `test-reports`,
	"coverageReporters"   : [`text`, `cobertura`, `lcov`],
	"coverageThreshold"   : {
		"global": {
			"branches"  : 100,
			"functions" : 100,
			"lines"     : 100,
		},
	},
	"globalSetup"              : `./testConfig/globalSetup.js`,
	"modulePathIgnorePatterns" : [
		`controllers`,
		`app.js`,
		`server.js`,
		`jest.config.js`,
		`testUtils`,
		`test-reports`,
		`routes`,
	],
	"reporters": [
		`default`,
		[
			`jest-junit`,
			{
				"outputDirectory" : `test-reports`,
				"outputName"      : `unit-test-results.xml`,
			},
		],
	],
	"resetMocks"      : true,
	"testEnvironment" : `node`,
	"testRegex"       : `(.+).test.js$`,
	"verbose"         : true,
};
