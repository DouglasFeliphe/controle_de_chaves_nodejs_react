import React, { useState, useEffect } from 'react';
import api from '../../services/api';

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
        </>
    );
}

export default Users;