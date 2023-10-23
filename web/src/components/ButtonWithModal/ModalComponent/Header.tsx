import React from 'react';

interface ModalHeader {
  title?: string;
}

export const ModalHeader = ({ title }: ModalHeader) => {
  return (
    <div className='modal-header'>
      <h4 className='modal-title'>{title}</h4>
      <button type='button' className='close' data-dismiss='modal'>
        &times;
      </button>
    </div>
  );
};
