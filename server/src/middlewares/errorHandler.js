const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
  
    // If it's a mongoose validation error, format the message
    if (err.name === 'ValidationError') {
      statusCode = 400;
      message = Object.values(err.errors).map((error) => error.message).join(', ');
    }
  
    res.status(statusCode).json({ success: false, message, statusCode });
  };
  
  module.exports = errorHandler;
  