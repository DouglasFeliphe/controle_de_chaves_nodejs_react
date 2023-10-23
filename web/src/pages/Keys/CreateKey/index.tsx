import React, { useState, FormEvent, Fragment } from 'react';
import api from '../../../services/api';
import { useModalStore } from '../../../store/modal.store';
import { useCreateUser } from '../../../services/queries/useUsersQuery';
import { useCreateKey } from '../../../services/queries/useKeysQuery';
import { closeModal } from '../../../functions/modal';
import { Form } from '../../../shared/components/Form';

const CreateKey = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);

  const { mutateAsync: createKeyAsync, isLoading: createKeyIsLoading } =
    useCreateKey();

  async function handleCreateKey(event: FormEvent) {
    event.preventDefault();

    const keyData = {
      name: name,
      number: number,
    };

    console.log('data :>> ', keyData);

    await createKeyAsync(keyData);

    closeModal('modal-key');
  }

  return (
    <Form
      onSubmit={handleCreateKey}
      isLoading={createKeyIsLoading}
      fields={
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
      }
    />
  );
};

export default CreateKey;
