const testMiddleware = (req, res, next) => {
  const time = new Date().getFullYear();
  console.log(time);
  next();
};

module.exports = testMiddleware;