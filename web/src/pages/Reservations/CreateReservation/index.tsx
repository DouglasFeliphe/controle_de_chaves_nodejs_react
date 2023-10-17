import React, { useState, useEffect } from 'react';
import { ModalScreen } from '../../../components/ModalScreen';
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
    <ModalScreen
      id='modal-create-reservation'
      title='Nova Reserva'
      onSubmit={() => {}}
    >
      <div className='form-group'>
        <label htmlFor='user'>Usuário:</label>
        <select className='form-control'>
          {users.map((user) => (
            <option key={user.registration_number}>{user.name}</option>
          ))}
        </select>
      </div>
    </ModalScreen>
  );
};

export default CreateReservation;
