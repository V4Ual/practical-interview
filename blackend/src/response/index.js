const success = (message, data) => {
  return {
    status: 200,
    success: true,
    message: message,
    data: data,
    err: {},
  };
};

const badRequest = (message) => {
  return {
    status: 400,
    success: false,
    message: message,
    data: {},
    err: null,
  };
};

const serverError = (message, err) => {
  return {
    status: 500,
    success: false,
    message: message,
    data: {},
    err: err,
  };
};

module.exports = {
  success,
  badRequest,
  serverError,
};
