import React, { useState, useEffect } from 'react';
import ModalScreen from '../../../components/ModalScreen';
import api from '../../../services/api';

interface CreateReservationProps {
    // date: string
    // user_name: string
    // key_name: string
    // key_number: number
    // delivered_at: string
    // returned_at: string  
    users: Users[]
}

interface Users {
    registration_number: number
    name: string
}

interface Keys {
    number: number
    name: string
}

const CreateReservation = () => {

    const [users, setUsers] = useState<Users[]>();

    // useEffect(() => {
    //     api.get('/users').then(
    //         response => {
    //             setUsers(response.data)
    //         }
    //     )
    // }, []);

    return (
        <ModalScreen
            id='modal-create-reservation'
            title='Nova Reserva'
            onSubmit={() => { }}>

            <div className="form-group">
                <label htmlFor="user">Usuário:</label>
                <select className='form-control' name="" id="">
                    {/* {users.map(user => (
                        <option key={user.registration_number} >{user.name}</option>
                    ))} */}
                </select>
            </div>

        </ModalScreen>
    )
}



export default CreateReservation;