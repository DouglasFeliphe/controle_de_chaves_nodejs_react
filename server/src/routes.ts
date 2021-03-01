import express from 'express';
import KeysController from './controllers/KeysController';

const keysController = new KeysController()

const routes = express.Router()

routes.get('/keys', keysController.index)
routes.get('/keys/:id', keysController.show)
routes.post('/keys', keysController.create)
routes.put('/keys/:id', keysController.update)
routes.delete('/keys/:id', keysController.delete)

export default routes