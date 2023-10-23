import React, { ReactNode, useState } from 'react';
import { Loader } from '../Loader';
import { FormModal } from './FormModal';
import { FormModalFooter } from './FormModal/Footer';
import { JsxElement } from 'typescript';

interface ButtonProps {
  title: string;
  modalId?: string;
  isLoading?: boolean;
  onSubmit?: () => void;
  content: React.ReactElement<any>;
}

export const Modal = ({
  title,
  modalId,
  onSubmit,
  isLoading,
  content,
}: ButtonProps) => {
  console.log('Modal modalId :', modalId);
  return (
    <FormModal modalId={modalId}>
      <FormModal.Header title={title} />
      <FormModal.Body>{content}</FormModal.Body>
      <FormModalFooter />
    </FormModal>
  );
};
