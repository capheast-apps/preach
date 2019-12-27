const { Router } = require('express')

const routes = new Router()

routes.get('/', (req, res) => {return res.json({a:1})})

module.exports = routes
