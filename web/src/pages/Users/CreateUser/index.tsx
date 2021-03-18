import React, { useState, Fragment } from 'react';
import ModalScreen from '../../../components/ModalScreen';

const CreateUser: React.FC = () => {

    const [name, setName] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');

    function handleCreateUser() {
        console.log('ok');
    }

    return (
        <ModalScreen
            id='modal-create-user'
            title='Novo Usuário'
            onSubmit={handleCreateUser}>
            <Fragment>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input className="form-control text-capitalize" onChange={e => setName(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="nr-identificacao">N° de identificação:</label>
                    <input className="form-control " placeholder='(Ex: CPF, n° matrícula ou SIAPE)' />
                </div>
            </Fragment>
        </ModalScreen>
    )
}

export default CreateUser;