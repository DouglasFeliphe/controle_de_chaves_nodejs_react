import React from 'react';
interface FormModalHeader {
  title: string;
}
export const FormModalHeader = ({ title }: FormModalHeader) => {
  return (
    <div className='modal-header'>
      <h4 className='modal-title'>{title}</h4>
      <button type='button' className='close' data-dismiss='modal'>
        &times;
      </button>
    </div>
  );
};
