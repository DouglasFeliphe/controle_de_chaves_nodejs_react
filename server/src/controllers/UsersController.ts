import connection from '../database/connection';
import { Request, Response } from 'express';

class UsersController {

    async index(request: Request, response: Response) {

        try {

            const users = await connection('users')
                .select('*')

            if (!users) {
                return response.status(404).json({ message: '0 results returned.' })
            }

            return response.json(users)

        } catch (error) {
            return response.status(400).json({ message: 'error while list users', error: error })
        }
    }

    show(request: Request, response: Response) {

    }

    create() {

    }

    update() {

    }
}