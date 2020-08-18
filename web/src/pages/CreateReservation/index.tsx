import React, { useState } from 'react';
import ModalScreen from '../../components/ModalScreen';
import { Interface } from 'readline';

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

const CreateReservation = (props: CreateReservationProps) => {

    return <ModalScreen
        id='modal-create-reservation'
        title='Nova Reserva'
        onSubmit={() => { }}
        body={
            <div className="form-group">
                <label htmlFor="user">Usuário:</label>
                <select className='form-control' name="" id="">
                    {props.users.map(user => (
                        <option key={user.registration_number} >{user.name}</option>
                    ))}
                </select>
            </div>
        }
        confirmButtonText='Reservar'
    />
}



export default CreateReservation;