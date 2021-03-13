import ButtonCreate from '../../components/ButtonCreate';
import React, { useState, useEffect } from 'react';
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
            <div className="row">

                <main role="main" className="container col-sm-8">
                    {/* CHAVES */}
                    <div className="my-3 p-3 bg-white rounded shadow-sm ">
                        <h6 className="border-bottom border-gray pb-2 mb-0">  </h6>
        
                        <div className='row container'>
                            {keys.map(key => (
                                <div key={key.number} className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                                    <img
                                        src={ImgChave}
                                        className="img-chave h-50"
                                        data-toggle="modal"
                                        data-target={'#modal-0' + key.number}
                                        alt='no_image'
                                    />
                                    {/* <button onClick={() => handleDeleteKey(key.number)} className="fas fa-times btn btn-danger" >x</button> */}
                                    <h4>N° {key.number}</h4>
                                    <span>{key.name}</span>
                                    <br />
                                    <button className='btn btn-warning btn-rounded' data-toggle="modal" data-target="#modal-create-reservation">Reservar</button>
                                </div>
                            ))}
                        </div>

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