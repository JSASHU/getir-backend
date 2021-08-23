const {
	buildError,
	statusCodeByError,
	BaseError,
	InternalServerError,
	InvalidRequestError,
	NotFoundError,
} = require(`./errors`);

describe(`ENVIRONMENT = development`, () => {
	beforeEach(() => {
		process.env.ENVIRONMENT = `development`;
	});

	it(`error should contain stackTrace`, () => {
		const error = new BaseError(`Internal error`);

		expect(error.details.stackTrace).toBeDefined();
	});

	it(`error should have default error message`, () => {
		const error = new BaseError();

		expect(error.errorMessage).toEqual(`Oops, something went wrong.`);
	});
});

describe(`ENVIRONMENT = test`, () => {
	beforeEach(() => {
		process.env.ENVIRONMENT = `test`;
	});

	it(`error should not contain stackTrace`, () => {
		const error = new InternalServerError(`Internal error`);

		expect(error.details.stackTrace).toBeUndefined();
	});
});

describe(`statusCodeByError`, () => {
	it(`returns 500 when error is InternalServerError`, () => {
		expect(statusCodeByError(new InternalServerError(`Internal error`))).toEqual(500);
	});

	it(`returns 400 when error is InvalidRequestError`, () => {
		expect(statusCodeByError(new InvalidRequestError(`Invalid request`))).toEqual(400);
	});

	it(`returns 404 when error is NotFoundError`, () => {
		expect(statusCodeByError(new NotFoundError(`Endpoint not found`))).toEqual(404);
	});

	it(`returns 500 when error name is undefined`, () => {
		expect(statusCodeByError(new Error(`Unexpected error`))).toEqual(500);
	});
});

describe(`buildError`, () => {
	const errorMessage = `Something's wrong`;

	describe(`errorType = InvalidRequestError`, () => {
		it(`should build InvalidRequestError`, () => {
			const errorType = `InvalidRequestError`;
			const error = buildError({ errorMessage, errorType });

			expect(error.errorMessage).toEqual(errorMessage);
			expect(error.name).toEqual(`InvalidRequestError`);
			expect(error.statusCode).toEqual(400);
		});
	});

	describe(`errorType = NotFoundError`, () => {
		it(`should build NotFoundError`, () => {
			const errorType = `NotFoundError`;
			const error = buildError({ errorMessage, errorType });

			expect(error.errorMessage).toEqual(errorMessage);
			expect(error.name).toEqual(`NotFoundError`);
			expect(error.statusCode).toEqual(404);
		});
	});

	describe(`errorType = InternalServerError`, () => {
		it(`should build InternalServerError`, () => {
			const errorType = `InternalServerError`;
			const error = buildError({ errorMessage, errorType });

			expect(error.errorMessage).toEqual(errorMessage);
			expect(error.name).toEqual(`InternalServerError`);
			expect(error.statusCode).toEqual(500);
		});
	});

	describe(`errorType is anything else`, () => {
		it(`should build InternalServerError`, () => {
			const errorType = `Error`;
			const error = buildError({ errorMessage, errorType });

			expect(error.errorMessage).toEqual(errorMessage);
			expect(error.name).toEqual(`InternalServerError`);
			expect(error.statusCode).toEqual(500);
		});
	});
});
