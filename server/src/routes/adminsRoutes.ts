import express from 'express';
import AdminsController from '../controllers/AdminsController';

const routes = express.Router()
const adminsController = new AdminsController();

routes.get('/admins/', adminsController.index)
routes.get('/admins/:id', adminsController.show)
routes.post('/admin', adminsController.create)
routes.put('/admins/:id', adminsController.update)
routes.delete('/admins/:id', adminsController.delete)

export default routes