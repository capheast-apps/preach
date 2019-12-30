import { Router } from 'express'

const routes = new Router()

routes.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

export default routes
