import { useMutation, useQuery } from 'react-query';
import { createKey, getKeys } from '../keys.service';
import { toast } from 'react-toastify';
import { queryClient } from './queryClient';
import { createKeyMessage } from '../messages/keys';

export function useGetKeys() {
  return useQuery('keys', () => getKeys(), {
    staleTime: Infinity,
    retry: false,
  });
}

export function useCreateKey() {
  return useMutation(createKey, {
    onSuccess: () => {
      toast.success(createKeyMessage.success);
      queryClient.invalidateQueries('keys');
    },
    onError: (error) => {
      console.log(createKeyMessage.error, error);
      toast.error(createKeyMessage.error);
    },
  });
}
