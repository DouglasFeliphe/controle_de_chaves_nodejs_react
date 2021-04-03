import React, { useState, Fragment, FormEvent } from 'react';
import ModalScreen from '../../../components/ModalScreen';
import api from '../../../services/api';

const CreateUser: React.FC = () => {

    const [name, setName] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [courseName, setCourseName] = useState('');
    const [degree, setDegree] = useState('');
    const [shift, setShift] = useState('matutino');
    const shifts = ['Matutino', 'Vespertino', 'Noturno', 'Integral']

    async function handleCreateUser(event: FormEvent) {
        event.preventDefault()

        const user_data = {
            registration_number: registrationNumber.toLowerCase(),
            name: name.toLowerCase(),
            course_name: courseName.toLowerCase(),
            degree: degree.toLowerCase(),
            shift: shift.toLowerCase()
        }
        console.log(name, registrationNumber, courseName, degree, shift);

        try {
            api.post('user', user_data)
                .then(response => {
                    if (response.status === 200) {
                        alert('Usuario criado.')
                    }
                })
        } catch (error) {
            alert('Erro ao criar usuário.')
            console.log(error);
        }
    }

    return (
        <ModalScreen
            id='modal-create-user'
            title='Novo Usuário'
            onSubmit={(e) => handleCreateUser(e)}>
            <Fragment>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        className="form-control text-capitalize"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nr-identificacao">N° de identificação:</label>
                    <input
                        type='number'
                        className="form-control"
                        onChange={e => setRegistrationNumber(e.target.value)}
                        placeholder='(Ex: CPF, n° matrícula ou SIAPE)'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="curso">Curso:</label>
                    <input
                        className="form-control"
                        onChange={e => setCourseName(e.target.value)}
                        placeholder='(Ex: Licenciatura em dança)'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="semestre">Semestre:</label>
                    <input
                        type='number'
                        className="form-control"
                        onChange={e => setDegree(`${e.target.value}° período`)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="turno">Turno:</label>
                    <select
                        className="form-control"
                        onChange={e => setShift(e.target.value)}>

                        {shifts.map((shift, index) => (
                            <option key={index}>{shift}</option>
                        ))}
                    </select>
                </div>
            </Fragment>
        </ModalScreen >
    )
}

export default CreateUser;