const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.log("Here in Global Catch Async with Error: ", err);
    next(err);
  });
};

module.exports = catchAsync;
