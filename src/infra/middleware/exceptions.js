const { StatusCodes } = require('http-status-codes');
const { DuplicityException} = require('../../app/errors');

function registryValidation(error, req, res, next) {
  if (error instanceof DuplicityException) {
    res.status(StatusCodes.CONFLICT);
    return res.send({
      httpStatus: StatusCodes.CONFLICT,
      message: error.message
    });
  }
  next(error);
}

function yupValidation(error, req, res, next) {
  if (error.name == "ValidationError") {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({
        httpStatus: StatusCodes.BAD_REQUEST,
        messages: error.errors
      });
  }
  next(error);
}

module.exports = (server) => {
  server.use(registryValidation);
  server.use(authValidation);
  server.use(yupValidation);
}
