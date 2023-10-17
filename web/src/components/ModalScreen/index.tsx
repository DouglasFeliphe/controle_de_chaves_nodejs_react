import React, { FormEvent } from 'react';
import { Loader } from '../Loader';

interface ModalProps {
  children?: React.ReactNode;
  id: string;
  title: string;
  isLoading?: boolean;
  onSubmit(event: FormEvent): void;
}

export const ModalScreen = (props: ModalProps) => {
  const { id, title, onSubmit, isLoading, children } = props;

  return (
    <div className='modal fade' id={id}>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <form onSubmit={onSubmit}>
            <div className='modal-header'>
              <h4 className='modal-title'>{title}</h4>
              <button type='button' className='close' data-dismiss='modal'>
                &times;
              </button>
            </div>

            <div className='modal-body p-5'>{children}</div>

            <div className='modal-footer'>
              <button
                type='submit'
                className='btn btn-success'
                // data-dismiss="modal"
              >
                {isLoading ? <Loader /> : 'Salvar'}
              </button>
              <button
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
