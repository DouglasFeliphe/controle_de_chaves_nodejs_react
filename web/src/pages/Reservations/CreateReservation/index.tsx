import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { useGetKeys } from '../../../services/queries/useKeysQuery';

interface Users {
  registration_number: number;
  name: string;
}

const CreateReservation = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const { data: keys } = useGetKeys();

  useEffect(() => {
    api.get('/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <div className='form-group'>
        <label htmlFor='user'>Usuário:</label>
        <select className='form-control'>
          {users.map((user) => (
            <option key={user.registration_number}>{user.name}</option>
          ))}
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor='key'>Chave:</label>
        <select className='form-control'>
          {keys?.map((key) => (
            <option key={key.number}>{key.name}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CreateReservation;
