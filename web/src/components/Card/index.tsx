import React from 'react';

export default function Card({ image, data, children }: any) {
  const hasKeyNumberOrRegistrationNumber =
    data.number || data.registration_number;
  return (
    <div className='card d-flex align-items-center pt-3 m-2'>
      <img
        src={image}
        data-toggle='modal'
        data-target={'#modal-0' + data.number}
        alt='no_image'
      />
      <div className='card-body text-center'>
        <h4 className='card-title'>{data.name}</h4>
        {hasKeyNumberOrRegistrationNumber && (
          <p className='card-text'>
            N° {data.number || data.registration_number}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
