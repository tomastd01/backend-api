const CONTROL_AUTH = true;

const controlAuth = (req, res, next) => {
    if(getAuth()) {
        return next()
    }

    return res.status(401).json({msg: "Authorization required"})
}

const getAuth = () => {
    if(CONTROL_AUTH) return true;
    return false;
}

module.exports = {controlAuth}