module.exports = function(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        let err = new Error('You must be logged in to view this page. Fool.');
        err.status = 401;
        return next(err);
    }
}
