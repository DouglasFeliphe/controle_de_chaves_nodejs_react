import React, { useState, useEffect, FormEvent } from 'react';
import Card from '../../components/Card';
import api from '../../services/api';
import Menu from '../../components/Menu';
import ImgChave from '../../assets/chave.jpg';
import { useGetKeys } from '../../services/queries/useKeysQuery';
import CreateKey from './CreateKey';
import { ButtonWithModal } from '../../components/ButtonWithModal';
import CreateReservation from '../Reservations/CreateReservation';
import { SearchInput } from '../../shared/components/SearchInput';

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
    <Menu title='Chaves'>
      <div className='row'>
        <div className='col-md-6'>
          <SearchInput onSearch={() => {}} />
        </div>
      </div>

      {/* CHAVES */}
      <div className='row d-flex'>
        {keys?.map((key) => (
          <Card key={key.number} image={ImgChave} data={key}>
            <ButtonWithModal title='Nova Reserva' modalId='modal-reservation'>
              {/* NOVA RESERVA */}
              <ButtonWithModal.Button />
              <ButtonWithModal.Modal content={<CreateReservation />} />
            </ButtonWithModal>
          </Card>
        ))}
      </div>

      <ButtonWithModal title='Nova Chave' modalId='modal-key'>
        <ButtonWithModal.Button />
        <ButtonWithModal.Modal content={<CreateKey />} />
      </ButtonWithModal>
    </Menu>
  );
};

export default Keys;
