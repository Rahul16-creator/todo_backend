const requestHandler = function (method, ...args) {
  return function (req, res, next) {
    if (!req.locals) {
      req.locals = {};
    }
    method(...args)
      .then((response) => {
        if (response) {
          req.locals.data = response;
        }
        next();
      })
      .catch((error) => {
        const msg_format = {
          status: error.status || false,
          message: error.message || "Something went wrong",
          code: error.code || 500,
        };
        req.locals.data = msg_format;
        next();
      });
  };
};
