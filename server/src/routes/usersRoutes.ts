import express from 'express';
import UsersController from '../controllers/UsersController';

const routes = express.Router()
const usersController = new UsersController()

routes.get('/users', usersController.index)
routes.get('/users/:registration_number', usersController.show)
routes.post('/user', usersController.create)
routes.put('/users/:registration_number', usersController.update)
routes.delete('/users/:registration_number', usersController.delete)

export default routes