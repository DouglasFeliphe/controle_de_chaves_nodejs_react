import React from 'react';

interface Loader {
  showText?: boolean;
  customText?: string;
}

export const Loader = ({ customText, showText = true }: Loader) => {
  return (
    <>
      <span
        className='spinner-grow spinner-grow-sm'
        role='status'
        aria-hidden='true'
      />{' '}
      <>{showText ? (customText ? customText : 'Salvando...') : null}</>
    </>
  );
};
