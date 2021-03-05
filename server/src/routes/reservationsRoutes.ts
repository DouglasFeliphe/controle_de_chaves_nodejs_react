import express from 'express';
import ReservationsController from '../controllers/ReservationsController';

const routes = express.Router()
const reservationsController = new ReservationsController()

routes.get('/reservations', reservationsController.index)

export default routes