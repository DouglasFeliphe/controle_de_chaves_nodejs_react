import React, { ReactNode, useState } from 'react';
import { Loader } from '../Loader';
import { ModalComponent } from './ModalComponent';
import { ModalActions } from './ModalComponent/Actions';
import { JsxElement } from 'typescript';

interface ButtonProps {
  title?: string;
  modalId?: string;
  isLoading?: boolean;
  onSubmit?: () => void;
  content: React.ReactElement<any>;
}

export const Modal = ({ title, modalId, content }: ButtonProps) => {
  return (
    <ModalComponent modalId={modalId}>
      <ModalComponent.Header title={title} />
      <ModalComponent.Body>{content}</ModalComponent.Body>
      {/* <ModalActions /> */}
    </ModalComponent>
  );
};
