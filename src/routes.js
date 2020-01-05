import { Router } from 'express'
import BibleController from './app/controller/BibleController'

const routes = new Router()

routes.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

routes.get('/bible/verse', BibleController.getChapter);

export default routes
