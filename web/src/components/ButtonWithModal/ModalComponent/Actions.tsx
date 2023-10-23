import React from 'react';
import { Loader } from '../../Loader';

interface ModalActions {
  isLoading?: string;
}

export const ModalActions = ({ isLoading }: ModalActions) => {
  return (
    <div className='modal-footer'>
      <button type='submit' className='btn btn-success'>
        {isLoading ? <Loader /> : 'Salvar'}
      </button>
      <button type='button' className='btn btn-danger' data-dismiss='modal'>
        Cancelar
      </button>
    </div>
  );
};
