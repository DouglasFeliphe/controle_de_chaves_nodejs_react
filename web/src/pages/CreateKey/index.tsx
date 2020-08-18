import React, { useState, Component, FormEvent } from 'react';
import ModalScreen from '../../components/ModalScreen';
import api from '../../services/api';

const CreateKey: React.FC = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const [formEvent, setFormEvent] = useState<FormEvent>();

    async function handleCreateKey(event: FormEvent) {
        event.preventDefault()

        const data = {
            name,
            number
        }

        try {
            await api.post('keys/', data)

        } catch (error) {
            alert('Erro ao criar nova chave, tente novamente.');
        }
    }

    return <ModalScreen
        id='modal-create-key'
        title='Nova Chave'
        onSubmit={(event: FormEvent) => handleCreateKey(event)}
        body={
            <>
                <div className="form-group" onSubmit={e => handleCreateKey(e)}>
                    <label htmlFor="email">Nome da Chave:</label>
                    <input
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Número:</label>
                    <input
                        type='number'
                        className="form-control"
                        value={number}
                        onChange={e => setNumber(parseInt(e.target.value))}
                    />
                </div>
            </>
        }
        confirmButtonText='Salvar'
    />
}

export default CreateKey;