import api from './api';
import { GetUsersResponse, PostUserRequest } from './types/users.types';

export async function getUsers(): Promise<GetUsersResponse | undefined> {
  try {
    const response = await api.get('users/');
    return response.data;
  } catch (error) {
    console.log('error getting users', error);
  }
}

export async function createUser(userData: PostUserRequest) {
  await api.post('user', userData);
}
