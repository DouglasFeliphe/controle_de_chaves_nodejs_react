import React, { useState, useEffect, useRef } from 'react';
import Menu from '../../components/Menu';
import Card from '../../components/Card';
// import ImgUsuario from '../../assets/usuario.png';
import api from '../../services/api';

import { useGetUsers } from '../../services/queries/useUsersQuery';
import CreateUser from './CreateUser';
import { ButtonWithModal } from '../../components/ButtonWithModal';
import { MODAL_USER_ID } from '../../constants/modalID';

interface Users {
  registration_number: number;
  name: string;
  image: string;
}

const MODAL_ID = 'modal-user';

const Users = () => {
  // listando os usuários
  const { data: users, isLoading } = useGetUsers();

  return (
    <Menu>
      <div className='row m-5'>
        <main role='main' className='container'>
          <h1 className='mb-5'>Usuários </h1>

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
          <ButtonWithModal title='Novo Usuário' modalId={MODAL_USER_ID}>
            <ButtonWithModal.Button />
            <ButtonWithModal.Modal content={<CreateUser />} />
          </ButtonWithModal>
        </main>
      </div>
    </Menu>
  );
};

export default Users;
