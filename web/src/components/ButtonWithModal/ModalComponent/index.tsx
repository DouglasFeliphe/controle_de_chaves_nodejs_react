import React from 'react';

import { ModalHeader } from './Header';
import { ModalBody } from './Body';
import { ModalActions } from './Actions';

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

ModalComponent.Header = ModalHeader;
ModalComponent.Body = ModalBody;
ModalComponent.ModalActions = ModalActions;
