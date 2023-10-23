import React from 'react';

import { FormModalHeader } from './Header';
import { FormModalBody } from './Body';
import { FormModalFooter } from './Footer';

interface ModalProps {
  modalId?: string;
  children: React.ReactNode;
}

export const ModalComponent = ({ modalId, children }: ModalProps) => {
  return (
    <div className='modal fade' id={modalId}>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>{children}</div>;
      </div>
    </div>
  );
};

ModalComponent.Header = FormModalHeader;
ModalComponent.Body = FormModalBody;
ModalComponent.Footer = FormModalFooter;