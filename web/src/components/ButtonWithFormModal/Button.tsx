import React, { useState } from 'react';

interface ButtonProps {
  text: string;
  modalId?: string;
  onClick?: () => void;
}

export const Button = ({ text, modalId, onClick }: ButtonProps) => {
  console.log('Button modalId :', modalId);
  return (
    <button
      className='btn btn-primary btn-lg m-5'
      data-toggle='modal'
      data-target={`#${modalId}`}
      onClick={onClick}
    >
      <i className='fas fa-plus' /> {text}
    </button>
  );
};
