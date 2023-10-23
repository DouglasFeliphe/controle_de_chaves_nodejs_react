import React from 'react';
import Menu from '../../components/Menu';
import Card from '../../components/Card';

import { useGetUsers } from '../../services/queries/useUsersQuery';
import CreateUser from './CreateUser';
import { ButtonWithModal } from '../../components/ButtonWithModal';
import { SearchInput } from '../../shared/components/SearchInput';

interface Users {
  registration_number: number;
  name: string;
  image: string;
}

const Users = () => {
  // listando os usuários
  const { data: users, isLoading } = useGetUsers();

  return (
    <Menu title='Usuários'>
      <div className='row'>
        <div className='col-md-6'>
          <SearchInput onSearch={() => {}} />
        </div>
      </div>
      {/* USUÁRIOS */}
      <div className='row d-flex'>
        {users?.map((user, index) => (
          <Card
            key={user.registration_number}
            data={user}
            image={`${user.image}/150?img=${index}`}
          />
        ))}
      </div>
      <ButtonWithModal title='Novo Usuário' modalId='modal-user'>
        <ButtonWithModal.Button />
        <ButtonWithModal.Modal content={<CreateUser />} />
      </ButtonWithModal>
    </Menu>
  );
};

export default Users;
