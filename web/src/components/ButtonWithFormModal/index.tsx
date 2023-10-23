import React from 'react';
import { Button } from './Button';
import { Modal } from './Modal';

interface ButtonWithModalProps {
  modalId: string;
  children: React.ReactNode;
}

export const ButtonWithModal = ({
  modalId,
  children,
}: ButtonWithModalProps) => {
  console.log('ButtonWithModal modalId :', modalId);
  //
  return (
    <div className='float-right'>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { modalId } as any);
        }
        return child;
      })}
    </div>
  );
};

ButtonWithModal.Button = Button;
ButtonWithModal.Modal = Modal;
