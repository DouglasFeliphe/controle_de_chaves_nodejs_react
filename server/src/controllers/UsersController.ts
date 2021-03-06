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
            return response.status(400).json({ message: 'error while show user.', error: error })
        }
    }

    async create(request: Request, response: Response) {

        const {
            registration_number,
            name,
            course_name,
            degree,
            shift } = request.body

        try {
            const user = await connection('users').insert(
                {
                    registration_number,
                    name,
                    course_name,
                    degree,
                    shift
                }
            )

            return response.send({ message: 'user created.', user })

        } catch (error) {
            return response.status(400).json({ message: 'error while create user.', error: error })
        }

    }

    async update(request: Request, response: Response) {
        const { registration_number } = request.params
        const new_user = request.body

        try {
            const user = await connection('users')
                .where('users.registration_number', registration_number)
                .update(new_user)

            if (!user) {
                return response.status(404).json({ message: 'user not found.' })
            }

            return response.send({ message: 'user updated.' })

        } catch (error) {
            return response.status(400).json({
                message: 'error while updating user.',
                error: error
            })
        }

    }

    async delete(request: Request, response: Response) {
        const { registration_number } = request.params

        try {
            const user = await connection('users')
                .where('users.registration_number', registration_number)
                .delete()

            if (!user) {
                return response.status(404).json({ message: 'user not found.' })
            }

            return response.json({ message: 'user deleted.' })

        } catch (error) {
            return response.status(400).json({
                message: 'error while deleting user.',
                error: error
            })
        }
    }
}

export default UsersController