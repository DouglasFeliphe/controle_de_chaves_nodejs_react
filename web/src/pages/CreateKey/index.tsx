import React, { useState, FormEvent } from 'react';
import ModalScreen from '../../components/ModalScreen';
import api from '../../services/api';

const CreateKey: React.FC = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    // const [formEvent, setFormEvent] = useState<FormEvent>();

    function handleCreateKey(event: FormEvent) {
        console.log('ok');
        event.preventDefault()

        const data = {
            name,
            number
        }

        console.log('data :>> ', data);
        try {
            api.post('keys/', data)
            alert('Chave criada com sucesso.')
        } catch (error) {
            alert('Erro ao criar nova chave, tente novamente.');
        }
    }

    return <ModalScreen
        id='modal-create-key'
        title='Nova Chave'
        // onSubmit={(event: FormEvent) => handleCreateKey(event)}
        onSubmit={(e: FormEvent) => handleCreateKey(e)}
        body={
            <>
                <div className="form-group" >
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