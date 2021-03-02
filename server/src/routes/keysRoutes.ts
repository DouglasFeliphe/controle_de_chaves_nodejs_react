import express from 'express';
import KeysController from '../controllers/KeysController';

const keysController = new KeysController()

const routes = express.Router()

routes.get('/keys', keysController.index)
routes.get('/keys/:number', keysController.show)
routes.post('/keys', keysController.create)
routes.put('/keys/:number', keysController.update)
routes.delete('/keys/:number', keysController.delete)

export default routes