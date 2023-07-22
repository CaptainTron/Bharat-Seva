const { RateLimiterMemory } = require("rate-limiter-flexible");
const statusCode = require("http-status-codes")
const opt = {
    points: 10,
    duration: 5,
    blockDuration: 50
}
const Limit = new RateLimiterMemory(opt)

const RateLimit = async (req, res, next) => {
    Limit.consume(req.ip)
        .then(() => {
            next();
        })
        .catch((err) => {
            res.status(statusCode.METHOD_NOT_ALLOWED).json({ status: "Too Many Request!", message: "Request From your IP Address Reached Limit, Wait For 5 Seconds!" })
        })
}


module.exports = { RateLimit }