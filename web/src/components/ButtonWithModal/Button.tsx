import React, { useState } from 'react';

interface ButtonProps {
  title?: string;
  modalId?: string;
}

export const Button = ({ title, modalId }: ButtonProps) => {
  return (
    <button
      className='btn btn-primary btn-lg m-5'
      data-toggle='modal'
      data-target={`#${modalId}`}
    >
      <i className='fas fa-plus' /> {title}
    </button>
  );
};
