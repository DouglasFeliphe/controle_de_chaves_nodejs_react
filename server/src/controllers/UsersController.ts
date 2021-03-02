import connection from '../database/connection';
import { Request, Response } from 'express';

class UsersController {

    async index(request: Request, response: Response) {

        try {

            const users = await connection('users').select('*')

            if (!users) {
                return response.status(404).json({ message: '0 results returned.' })
            }

            return response.json(users)

        } catch (error) {
            return response.status(400).json({ message: 'error while list users', error: error })
        }
    }

    async show(request: Request, response: Response) {
        const { registration_number } = request.params

        try {
            const user = await connection('users')
                .where('users.registration_number', registration_number)
                .select()
                .first()

            if (!user) {
                return response.status(404).json({ message: 'user not found.' })
            }

            return response.json(user)

        } catch (error) {
            return response.status(400).json({ message: 'error while show user.' })
        }
    }

    create() {

    }

    update() {

    }

    delete() {

    }
}

export default UsersController