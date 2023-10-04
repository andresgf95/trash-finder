import jwt from "jsonwebtoken"

function middlewareAuthorization (req, res, next) {
    try {
        const [_, token] = req.headers.authorization.split(" ")
        const authorizationData = jwt.verify(token, process.env.JWT_SECRET)
        res.locals.authorization = authorizationData
        return next()
    } catch (err) {
        res.sendStatus(403)
    }
}

export {
    middlewareAuthorization
}