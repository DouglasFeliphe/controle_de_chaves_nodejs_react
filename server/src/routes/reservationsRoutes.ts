import express from 'express';
import ReservationsController from '../controllers/ReservationsController';

const routes = express.Router()
const reservationsController = new ReservationsController()

routes.get('/reservations', reservationsController.index)
routes.get('/reservations/:id', reservationsController.show)
routes.post('/reservation', reservationsController.create)
routes.put('/reservations/:id', reservationsController.update)
routes.delete('/reservations/:id', reservationsController.delete)

export default routes