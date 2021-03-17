import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import Card from '../../components/Card';
import ImgUsuario from '../../assets/usuario.png';
import api from '../../services/api';
import ButtonCreate from '../../components/ButtonCreate';

interface Users {
    registration_number: number
    name: string
}

const Users = () => {

    const [users, setUsers] = useState<Users[]>([]);

    // listando os usuários
    useEffect(() => {
        api.get('users/').then(response => {
            setUsers(response.data)
        })
    }, []);

    return (
        <>
            <Menu></Menu>
            <div className="row m-5">
                <main role="main" className="container col-sm-8">
                    <h1 className='text-center mb-5'>Usuários </h1>

                    {/* USUÁRIOS */}
                    <div className='row dflex justify-content-around'>
                        {users.map(user => (
                            <Card
                                data={user}
                                image={ImgUsuario}>
                            </Card>
                        ))}
                    </div>
                    <ButtonCreate modal='Users'></ButtonCreate>
                </main>
            </div>
        </>
    );
}

export default Users;