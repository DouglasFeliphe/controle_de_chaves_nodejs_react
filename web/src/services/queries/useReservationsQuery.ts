import { useQuery } from 'react-query';
import { getUsers } from '../users.service';
import { getReservations } from '../reservations.service';

export function useGetReservations() {
  return useQuery('reservations', () => getReservations(), {
    staleTime: Infinity,
    retry: false,
  });
}
