import React, { useState, useEffect } from 'react';
// import CreateKey from '../CreateKey';
import api from '../../../services/api';

interface Keys {
    name: string
    number: number
}

const ShowKeys: React.FC = () => {

    const [keys, setKeys] = useState<Keys[]>([]);

    // listando todas as chaves
    useEffect(() => {
        api.get('keys/').then(response => {
            setKeys(response.data)
        })
    }, []);

    return (
        <div className="tab-pane container fade" id="content-keys">

            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0"></h6>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Número</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {keys?.map(key => (
                            <tr key={key.number}>
                                <td>{key.name}</td>
                                <td>{key.number}</td>
                                <td><button className='btn btn-info'>Editar</button></td>
                                <td><button className='btn btn-danger'>Deletar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="row">
                    <div className="col-lg-12 d-flex ">
                        <button
                            id="btn-adicionar"
                            className="btn btn-success btn-rounded p-10"
                            data-toggle="modal"
                            data-target="#modal-create-key" ><b>+</b>
                        Nova Chave
                        </button>
                    </div>
                </div>

                {/* <CreateKey /> */}

            </div>
        </div>


    )
}

export default ShowKeys;