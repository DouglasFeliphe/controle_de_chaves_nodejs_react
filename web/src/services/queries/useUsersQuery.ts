import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { createUser, getUsers } from '../users.service';
import { queryClient } from './queryClient';
import { toast } from 'react-toastify';
import { createUserMessage } from '../messages/users';

export function useGetUsers() {
  return useQuery('users', () => getUsers(), {
    staleTime: Infinity,
    retry: false,
  });
}

export function useCreateUser() {
  return useMutation(createUser, {
    onSuccess: () => {
      toast.success(createUserMessage.success);
      queryClient.invalidateQueries('users');
    },
    onError: (error) => {
      console.log(createUserMessage.error, error);
      toast.error(createUserMessage.error);
    },
  });
}
