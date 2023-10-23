import React from 'react';
import { Button } from './Button';
import { Modal } from './Modal';
import { ModalKeys } from '../../shared/types/modal';

interface ButtonWithModalProps {
  title: string;
  modalId: ModalKeys;
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
