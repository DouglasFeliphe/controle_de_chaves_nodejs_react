import React from 'react';
import { Button } from './Button';
import { Modal } from './Modal';

interface ButtonWithModalProps {
  title: string;
  modalId: string;
  children: React.ReactNode;
}

export const ButtonWithModal = ({
  title,
  modalId,
  children,
}: ButtonWithModalProps) => (
  <div className='float-right'>
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { title, modalId } as any);
      }
      return child;
    })}
  </div>
);

ButtonWithModal.Button = Button;
ButtonWithModal.Modal = Modal;
