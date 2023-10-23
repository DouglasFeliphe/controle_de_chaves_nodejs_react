import { useQuery } from 'react-query';
import { getKeys } from '../keys.service';

export function useGetKeys() {
  return useQuery('keys', () => getKeys(), {
    staleTime: Infinity,
    retry: false,
  });
}
