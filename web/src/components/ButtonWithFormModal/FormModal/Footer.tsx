import React from 'react';
import { Loader } from '../../Loader';

interface FormModalFooter {
  isLoading?: string;
}

export const FormModalFooter = ({ isLoading }: FormModalFooter) => {
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
