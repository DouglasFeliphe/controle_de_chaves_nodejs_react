import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

const Keys: React.FC = () => {

    const [navItemClass, setNavItemClass] = useState(true);

    // const isBoxVisible = false

    const toggleBox = () => {
        setNavItemClass(!navItemClass);
    };

    return (
        <div>
            <h1 className="text-center mb-5">Controle de Chaves</h1>
            <ul className="nav nav-tabs dflex justify-content-center">
                <Link to='/reservations'>
                    <NavItem text='Reservas' />
                </Link>
                <Link to='/keys'>
                    <NavItem text='Chaves' />
                </Link>
                <Link to='/users'>
                    <NavItem text='Usuários' />
                </Link>
            </ul>
        </div >
    )
}


function navItem({ }) {
    return (<li className="nav-item">
        <span className="nav-link">Usuários</span>
    </li>);
}
export default Keys;