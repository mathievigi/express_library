const router = require('express').Router()

const author_route = require("./author.route")

router.use("/authors", author_route)

module.exports = router

