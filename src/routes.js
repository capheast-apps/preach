import { Router } from 'express'

const routes = new Router()

routes.get('/', (req, res) => {return res.json({a:1})})

export default routes
