import React from 'react';
import { Link } from 'react-router-dom';

const Keys: React.FC = () => {
    return (
        <div>
            <h1 className="text-center mb-5">Controle de Chaves</h1>
            <ul className="nav nav-tabs dflex justify-content-center">
                <Link to='/reservations'>
                    <li className="nav-item">
                        <span className="nav-link">Reservas</span>
                    </li>
                </Link>
                <Link to='/keys'>
                    <li className="nav-item">
                        <span className="nav-link active" >Chaves</span>
                    </li>
                </Link>
                <Link to='/users'>
                    <li className="nav-item">
                        <span className="nav-link">Usuários</span>
                    </li>
                </Link>
            </ul>
        </div >
    )
}

export default Keys;