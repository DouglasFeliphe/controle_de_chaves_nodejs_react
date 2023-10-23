import React, { useState, FormEvent, Fragment } from 'react';
import api from '../../../services/api';
import { useModalStore } from '../../../store/modal.store';

const CreateKey = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  // const [formEvent, setFormEvent] = useState<FormEvent>();

  const [isLoading, setIsLoading] = useState(false);

  // const { closeModal } = useModalStore();

  async function handleCreateKey(event: FormEvent) {
    // setIsLoading(true);
    // event.preventDefault();
    // const keyData = {
    //   name: name,
    //   number: number,
    // };
    // console.log('data :>> ', keyData);
    // try {
    //   const response = await api.post('keys', keyData);
    //   console.log('response :', response.status);
    //   if (response.status === 200) {
    //     alert('Chave criada com sucesso.');
    //   }
    //   if (response.status === 400) {
    //     alert('Erro. Chave já existe.');
    //   }
    // } catch (error) {
    //   console.log('error: ', error);
    //   alert('Erro ao criar nova chave, tente novamente.');
    // }
    // setIsLoading(false);
    // closeModal('modal-create-key');
  }

  return (
    <>
      <div className='form-group'>
        <label htmlFor='email'>Nome: </label>
        <input
          className='form-control'
          placeholder='Ex: Sala de Manutenção'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='pwd'>Número (opcional):</label>
        <input
          type='number'
          className='form-control'
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>
    </>
  );
};

export default CreateKey;
