import React from 'react';
import ModalCreateKey from '../../pages/Keys/CreateKey';
import ModalCreateUser from '../../pages/Users/CreateUser';
import ModalCreateReservation from '../../pages/Reservations/CreateReservation';

interface ButtonCreateProps {
  modal: 'Keys' | 'Users' | 'Reservations';
}

interface IModal {
  id: string;
  text: string;
}

const modals: Record<string, IModal> = {
  Keys: {
    id: 'modal-create-key',
    text: 'Nova Chave',
  },
  Users: {
    id: 'modal-create-user',
    text: 'Novo Usuário',
  },
  Reservations: {
    id: 'modal-create-reservation',
    text: 'Reservar',
  },
};

export default function ButtonCreate({ modal }: ButtonCreateProps) {
  const selectedModal = modals[modal];

  return (
    <div className='float-right'>
      <button
        className='btn btn-primary btn-lg m-5'
        data-toggle='modal'
        data-target={`#${selectedModal.id}`}
      >
        <i className='fas fa-plus' /> {selectedModal.text}
      </button>
      {modal === 'Keys' && <ModalCreateKey />}
      {modal === 'Users' && <ModalCreateUser />}
      {modal === 'Reservations' && <ModalCreateReservation />}
    </div>
  );
}
