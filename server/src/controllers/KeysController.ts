import { Request, Response } from 'express';
import connection from '../database/connection';

class KeysController {
  async index(request: Request, response: Response) {
    try {
      const keys = await connection('keys').select('*');

      if (!keys) {
        return response.status(404).json({ error: '0 results returned.' });
      }

      return response.json(keys);
    } catch (error) {
      return response
        .status(400)
        .json({ message: 'error while list keys.', error: error });
    }
  }

  async show(request: Request, response: Response) {
    const { number } = request.params;

    try {
      const key = await connection('keys')
        .where('keys.number', number)
        .select()
        .first();

      if (!key) {
        response.status(404).json({ message: 'key not found.' });
      }

      return response.json(key);
    } catch (error) {
      return response.status(400).json({
        message: 'error while showing key.',
        error: error,
      });
    }
  }

  async create(request: Request, response: Response) {
    const { number, name } = request.body;

    // Check if the key with the given number already exists
    const existingKey = await connection('keys')
      .where('number', number)
      .orWhere('name', name)
      .first();

    if (existingKey) {
      console.log('existingKey :', existingKey);
      return response.status(400).json({
        message: 'Key already exists.',
      });
    }

    try {
      await connection('keys').insert({
        number,
        name,
      });

      return response.send({ message: 'key created!' });
    } catch (error) {
      return response.status(404).json({
        message: 'error while creating key.',
        error: error,
      });
    }
  }

  async update(request: Request, response: Response) {
    const { number } = request.params;
    const new_key = request.body;

    try {
      const key = await connection('keys')
        .where('keys.number', number)
        .update(new_key);

      if (!key) {
        return response.status(404).json({ message: 'key not found' });
      }

      return response.send({ message: 'key updated!' });
    } catch (error) {
      return response.status(400).json({
        message: 'error while updating key.',
        error: error,
      });
    }
  }

  async delete(request: Request, response: Response) {
    const { number } = request.params;

    try {
      const key = await connection('keys')
        .where('keys.number', number)
        .delete();

      if (!key) {
        response.status(404).json({ message: 'key not found.' });
      }

      return response.json({ message: 'key deleted.' });
    } catch (error) {
      return response.status(400).json({
        message: 'error while deleting key.',
        error: error,
      });
    }
  }
}

export default KeysController;
