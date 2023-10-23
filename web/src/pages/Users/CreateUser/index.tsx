import React, { useState, FormEvent } from 'react';
import { useCreateUser } from '../../../services/queries/useUsersQuery';
import { PostUserRequest } from '../../../services/types/users.types';
import { closeModal } from '../../../functions/modal';
import { Form } from '../../../shared/components/Form';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState(0);
  const [courseName, setCourseName] = useState('');
  const [degree, setDegree] = useState('');
  const [shift, setShift] = useState('matutino');
  const shifts = ['Matutino', 'Vespertino', 'Noturno', 'Integral'];

  const { mutateAsync: createUserAsync, isLoading: createUserIsLoading } =
    useCreateUser();

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    const userData: PostUserRequest = {
      registration_number: registrationNumber,
      name: name.toLowerCase(),
      course_name: courseName.toLowerCase(),
      degree: degree.toLowerCase(),
      shift: shift.toLowerCase(),
      image: 'https://i.pravatar.cc',
    };

    // console.log('userData :', userData);

    await createUserAsync(userData);

    closeModal('modal-user');
    //eslint-disable-next-line
  }

  return (
    <Form
      onSubmit={handleCreateUser}
      isLoading={createUserIsLoading}
      fields={
        <>
          <div className='form-group'>
            <label htmlFor='nome'>Nome:</label>
            <input
              className='form-control text-capitalize'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='nr-identificacao'>N° de identificação:</label>
            <input
              type='number'
              className='form-control'
              onChange={(e) => setRegistrationNumber(Number(e.target.value))}
              placeholder='(Ex: CPF, n° matrícula ou SIAPE)'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='curso'>Curso:</label>
            <input
              className='form-control'
              onChange={(e) => setCourseName(e.target.value)}
              placeholder='(Ex: Licenciatura em dança)'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='semestre'>Semestre:</label>
            <input
              type='number'
              className='form-control'
              onChange={(e) => setDegree(`${e.target.value}° período`)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='turno'>Turno:</label>
            <select
              className='form-control'
              onChange={(e) => setShift(e.target.value)}
            >
              {shifts.map((shift, index) => (
                <option key={index}>{shift}</option>
              ))}
            </select>
          </div>
        </>
      }
    />
  );
};

export default CreateUser;
