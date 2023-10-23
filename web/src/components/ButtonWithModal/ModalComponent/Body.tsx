import React from 'react';

interface ModalBody {
  children: React.ReactNode;
}

export const ModalBody = ({ children }: ModalBody) => {
  return <div className='modal-body p-5'>{children}</div>;
};
