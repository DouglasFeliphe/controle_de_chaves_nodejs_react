import api from './api';
import { GetReservationsResponse } from './types/reservations.types';

export async function getReservations(): Promise<
  GetReservationsResponse | undefined
> {
  try {
    const response = await api.get('reservations/');
    return response.data;
  } catch (error) {
    console.log('error getting reservations', error);
  }
}
