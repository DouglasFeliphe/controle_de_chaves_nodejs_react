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

        return response.json({ key })
    }

    async create(request: Request, response: Response) {

        const { number, name } = request.body

        await connection('keys').insert({
            number,
            name
        })

        return response.send({ message: 'key created!', })
    }

    async update(request: Request, response: Response) {
        // const 
    }

    async delete() {

    }
}

export default KeysController