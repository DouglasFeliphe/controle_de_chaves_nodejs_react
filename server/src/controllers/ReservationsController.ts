import { Request, response, Response } from 'express';
import connection from '../database/connection';


interface Reservations {
    id: number
    key_name: string
    key_number: number
    user_name: string
    user_registration_number: number
    returned_at: string
}
class ReservationsController {

    async index(request: Request, response: Response) {

        try {
            const reservations = await connection('reservations').select('*')

            if (!reservations) {
                return response.status(404).json({ message: '0 results returned.' })
            }

            return response.json(reservations)

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
            const reservation = await connection<Reservations>('reservations')
                .where('id', id)
                .select()
                .first()

            if (!reservation) {
                return response.status(404).json({ message: 'reservation not found.' })
            }

            return response.json(reservation)

        } catch (error) {
            return response.status(400).json({
                message: 'error while showing reservation.',
                error: error.message
            })
        }
    }

    async create(request: Request, response: Response) {

        const {
            id,
            key_name,
            key_number,
            user_name,
            user_registration_number
        } = request.body

        try {
            const reservation = await connection<Reservations>('reservations').insert({
                id,
                key_name,
                key_number,
                user_name,
                user_registration_number
            })

            return response.send({ message: 'reservation created.', reservation })

        } catch (error) {
            return response.status(400).json({
                message: 'error while creating reservation.',
                error: error.message
            })
        }

    }


    async update(request: Request, response: Response) {

        const { id } = request.params
        const data = request.body

        try {
            const new_reservation = await connection<Reservations>('reservations')
                .where('reservations.id', id)
                .update(data)

            if (!new_reservation) {
                return response.status(404).json({ message: 'Reservation not found.' })
            }

            return response.send({ message: 'reservation updated.' })

        } catch (error) {
            return response.status(400).json({
                message: 'error while updating reservation.',
                error: error
            })
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params

        try {
            const reservation = await connection<Reservations>('reservations')
                .where('id', id)
                .delete()

            if (!reservation) {
                return response.status(404).json({ message: 'reservation not found.' })
            }

            return response.json({ message: 'reservation deleted.' })

        } catch (error) {
            return response.status(400).json({
                message: 'error while deleting reservation.',
                error: error
            })
        }
    }
}

export default ReservationsController