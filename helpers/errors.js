const { nanoid } = require(`nanoid`);

const badRequestCode = 400;
const notFoundCode = 404;
const internalErrorCode = 500;

class BaseError extends Error {
	constructor(message) {
		super(message);
		this.errorMessage = message || `Oops, something went wrong.`;
		if (process.env.ENVIRONMENT === `development`) {
			this.details = { "id": nanoid(), "stackTrace": this.stack };
			console.info(this.details.id);
		} else {
			this.details = { "id": nanoid() };
			console.info(this.details.id);
		}
	}
}

class InvalidRequestError extends BaseError {
	constructor(message) {
		super(message);
		this.errorMessage = message;
		this.name = `InvalidRequestError`;
		this.statusCode = badRequestCode;
	}
}

class NotFoundError extends BaseError {
	constructor(message) {
		super(message);
		this.errorMessage = message;
		this.name = `NotFoundError`;
		this.statusCode = notFoundCode;
	}
}

class InternalServerError extends BaseError {
	constructor(message) {
		super(message);
		this.name = `InternalServerError`;
		this.errorMessage = message;
		this.statusCode = internalErrorCode;
	}
}

const statusCodeByError = (err) => {
	if (err.name === `InvalidRequestError`) {
		return badRequestCode;
	} else if (err.name === `NotFoundError`) {
		return notFoundCode;
	} else if (err.name === `InternalServerError`) {
		return internalErrorCode;
	}
	return internalErrorCode;
};

const buildError = (def) => {
	switch (def.errorType) {
	case `InvalidRequestError`:
		return new InvalidRequestError(def.errorMessage);
	case `NotFoundError`:
		return new NotFoundError(def.errorMessage);
	case `InternalServerError`:
		return new InternalServerError(def.errorMessage);
	default:
		return new InternalServerError(def.errorMessage);
	}
};

module.exports = {
	BaseError,
	InternalServerError,
	InvalidRequestError,
	NotFoundError,
	badRequestCode,
	buildError,
	internalErrorCode,
	notFoundCode,
	statusCodeByError,
};
