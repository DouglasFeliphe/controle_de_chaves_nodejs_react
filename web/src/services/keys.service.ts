import api from './api';
import { GetKeysResponse, KeysType, PostKeyRequest } from './types/keys.types';

export async function getKeys(): Promise<GetKeysResponse | undefined> {
  try {
    const response = await api.get('keys/');
    return response.data;
  } catch (error) {
    console.log('error getting keys', error);
  }
}

export async function createKey(keyData: PostKeyRequest) {
  await api.post('keys/', keyData);
}
