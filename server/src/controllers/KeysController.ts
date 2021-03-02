import { Request, Response } from 'express';
import connection from '../database/connection';
class KeysController {
    async index(request: Request, response: Response) {
        const keys = await connection('keys').select('*')
        if (!keys) {
            return response.status(400).json({ error: 'keys not found.' })
        }
        return response.json({ keys })
    }

    async show(request: Request, response: Response) {
        const { number } = request.params

        const key = await connection('keys')
            .select()
            .where('keys.number', number)

        if (!key) {
            return response.status(400).json({ error: 'key not found.' })
        }

        return response.json({ key })
    }

    async create() {

    }

    async update() {

    }

    async delete() {

    }
}

export default KeysController