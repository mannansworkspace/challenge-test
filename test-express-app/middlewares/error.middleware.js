// eslint-disable-next-line no-unused-vars
class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
  };

  // logger.error(err);
  console.log("error in error handler : ", err , {response});

  res.status(statusCode).send(response);
};

module.exports = {
  errorHandler,
  ApiError,
};
