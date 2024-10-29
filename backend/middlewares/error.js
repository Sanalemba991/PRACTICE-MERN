class ErrorHandler extends Error {
  constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  // Default message and status code if not provided
  err.message = err.message || "Internal Server Error!";
  err.statusCode = err.statusCode || 500;

  return res.status(err.statusCode).json({
      success: false, // Corrected typo from 'successs' to 'success'
      message: err.message, // Corrected 'error.message' to 'err.message'
  });
};

export default ErrorHandler;