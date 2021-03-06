import { Request, response, Response } from 'express';
import connection from '../database/connection';

class ReservationsController {

    async index(request: Request, response: Response) {

        try {
            const reservations = await connection('reservations').select('*')

            if (!reservations) {
                return response.status(404).json({ message: '0 results returned.' })
            }

            return response.json({ reservations })

        } catch (error) {
            return response.status(400).json({
                message: 'error while listing reservations.',
                error: error
            })
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        try {
            const reservation = await connection('reservations')
                .where('reservations.id', id)
                .select()
                .first()

            if (!reservation) {
                return response.status(404).json({ message: 'reservation not found.' })
            }

            return response.json({ reservation })

        } catch (error) {
            return response.status(400).json({
                message: 'error while showing reservation.',
                error: error.message
            })
        }
    }

    async create(request: Request, response: Response) {

    }


    async update(request: Request, response: Response) {

    }

    async delete(request: Request, response: Response) {

    }
}

export default ReservationsController