import React from 'react';

const Keys: React.FC = () => {
    return (
        <div>
            <h1 className="text-center mb-5">Controle de Chaves</h1>
            <ul className="nav nav-tabs dflex justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Chaves</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Reservas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Controle</a>
                </li>
            </ul>
        </div>
    )
}

export default Keys;