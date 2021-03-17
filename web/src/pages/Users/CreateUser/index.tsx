import React, { Fragment } from 'react';
import ModalScreen from '../../../components/ModalScreen';

const CreateUser: React.FC = () => {
    return (
        <ModalScreen
            id='modal-create-user'
            title='Novo Usuário'
            onSubmit={() => { }}>
            <Fragment>
                <div className="form-group">
                    <label htmlFor="email">Nome:</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">N° Identificação:</label>
                    <input type="password" className="form-control" />
                </div>
            </Fragment>
        </ModalScreen>
    )
}

export default CreateUser;