const auth = (req, res, next) => {
    const { cookies } = req;

    if (cookies.name) {
        req.user = cookies.name;
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = auth;