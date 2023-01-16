const globalErrorHandler = (err, req, res, next) => {
    // Handling status code errors
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    // Handling message errors
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    })

}
export default globalErrorHandler;