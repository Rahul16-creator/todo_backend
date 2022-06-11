module.exports = function (req, res, next) {
  const { status = true, code = 201, message, data } = req.locals.data;
  return res.status(code).send({status,code,message,data})
};
