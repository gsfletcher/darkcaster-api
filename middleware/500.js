/*jshint esversion:6*/
const errorHandler = (err, request, response, next) => {
  response.status(500).json({
    message: 'Uh oh! Somethings broke, bruh.'
  });
};

module.exports= errorHandler;
