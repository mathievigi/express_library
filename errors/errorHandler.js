const errorHandler = (err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500);
    res.send(err.message || "Internal Server Error");
};

module.exports = errorHandler;
