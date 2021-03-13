import ButtonCreate from '../../components/ButtonCreate';
import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import CreateKey from '../CreateKey';
import api from '../../services/api';
import Menu from '../../components/Menu';
import ImgChave from '../../assets/chave.jpg';


interface Keys {
    number: number
    name: string
}

const Keys: React.FC = () => {

    const [keys, setKeys] = useState<Keys[]>([]);

    // listando as chaves
    useEffect(() => {
        api.get('keys/').then(response => {
            setKeys(response.data)
        })
    }, []);

    async function handleDeleteKey(_keyNumber: number) {
        try {
            await api.delete(`keys/${_keyNumber}/`)
            alert(`Chave ${_keyNumber} deletada com sucesso.`)

        } catch (error) {
            alert('Erro ao deletar chave, tente novamente.')
        }
    }

    return (
        <>
            <Menu></Menu>
            <div className="row m-5">
                <main role="main" className="container col-sm-8">
                    <h1 className='text-center mb-5'>Chaves </h1>

                    {/* CHAVES */}
                    <div className='row'>
                        {keys.map(key => (
                            <Card key={key.number} image={ImgChave} data={key}></Card>
                        ))}
                    </div>

                    <ButtonCreate component='Keys' />

                    {/* <CreateUser /> */}
                    {/* <CreateReservation users={users} /> */}
                </main>
            </div>
        </>
    )
}


function undefined({ }) {
    return (<button className="btn btn-primary" data-toggle="modal" data-target="#modal-create-user">
        Novo Usuário
        <i className="fas fa-plus"></i>
    </button>);
}
export default Keys;