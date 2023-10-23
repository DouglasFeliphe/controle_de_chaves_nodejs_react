import React from 'react';

interface FormModalBody {
  children: React.ReactNode;
}

export const FormModalBody = ({ children }: FormModalBody) => {
  return <div className='modal-body p-5'>{children}</div>;
};
