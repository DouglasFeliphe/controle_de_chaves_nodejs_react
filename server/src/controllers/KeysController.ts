import { Request, Response } from 'express';

class KeysController {
    async index(request: Request, response: Response) {
        return response.json('ok')
    }

    async create() {

    }

    async show() {

    }   

    async update() {

    }

    async delete() {

    }
}

export default KeysController