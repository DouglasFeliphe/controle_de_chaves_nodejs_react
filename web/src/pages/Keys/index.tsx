import React, { useState, useEffect, FormEvent } from 'react';
import Card from '../../components/Card';
import api from '../../services/api';
import Menu from '../../components/Menu';
import ImgChave from '../../assets/chave.jpg';
import { useGetKeys } from '../../services/queries/useKeysQuery';
import CreateKey from './CreateKey';
import { ButtonWithModal } from '../../components/ButtonWithFormModal';
import { MODAL_KEY_ID, MODAL_RESERVATION_ID } from '../../constants/modalID';
import CreateReservation from '../Reservations/CreateReservation';

const Keys = () => {
  const { data: keys, isLoading } = useGetKeys();

  async function handleDeleteKey(_keyNumber: number) {
    try {
      await api.delete(`keys/${_keyNumber}/`);
      alert(`Chave ${_keyNumber} deletada com sucesso.`);
    } catch (error) {
      alert('Erro ao deletar chave, tente novamente.');
    }
  }

  function handleCreateReservation(event: FormEvent) {
    alert('msg');
  }

  return (
    <Menu>
      <div className='row m-5'>
        <main role='main' className='container'>
          <h1 className='mb-5'>Chaves</h1>

          {/* CHAVES */}
          <div className='row d-flex'>
            {keys?.map((key) => (
              <Card key={key.number} image={ImgChave} data={key}>
                <ButtonWithModal modalId={MODAL_RESERVATION_ID}>
                  <ButtonWithModal.Button text='Nova Reserva' />
                  <ButtonWithModal.Modal
                    title='Reservar Chave'
                    content={<CreateReservation />}
                  />
                </ButtonWithModal>
              </Card>
            ))}
          </div>

          <ButtonWithModal modalId={MODAL_KEY_ID}>
            <ButtonWithModal.Button text='Nova Chave' />
            <ButtonWithModal.Modal
              title='Criar Chave'
              content={<CreateKey />}
            />
          </ButtonWithModal>
        </main>
      </div>
    </Menu>
  );
};

export default Keys;
