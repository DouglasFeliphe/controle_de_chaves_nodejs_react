import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

interface Users {
  registration_number: number;
  name: string;
}

const CreateReservation = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    api.get('/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className='form-group'>
      <label htmlFor='user'>Usuário:</label>
      <select className='form-control'>
        {users.map((user) => (
          <option key={user.registration_number}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CreateReservation;
