import React, { FormEvent } from 'react';
import { Loader } from '../../../components/Loader';

interface FormProps {
  isLoading: boolean;
  onSubmit: (event: FormEvent<Element>) => Promise<void>;
  fields: React.ReactNode;
}

export const Form = ({ isLoading, onSubmit, fields }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {fields}

      <Actions isLoading={isLoading} />
    </form>
  );
};

interface Actions {
  isLoading: boolean;
}

const Actions = ({ isLoading }: Actions) => (
  <div className='d-flex justify-content-end' style={{ gap: '15px' }}>
    <button type='submit' className='btn btn-success'>
      {isLoading ? <Loader /> : 'Salvar'}
    </button>
    <button type='button' className='btn btn-danger' data-dismiss='modal'>
      Cancelar
    </button>
  </div>
);
