import express from 'express';
import ReservationsController from '../controllers/ReservationsController';

const routes = express.Router()
const reservationsController = new ReservationsController()

routes.get('/reservations', reservationsController.index)
routes.get('/reservations/:registration_number', reservationsController.show)
routes.post('/reservation', reservationsController.create)
routes.put('/reservations/:registration_number', reservationsController.update)
routes.delete('/reservations/:registration_number', reservationsController.delete)

export default routes