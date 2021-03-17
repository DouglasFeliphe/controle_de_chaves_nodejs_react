import React, { useState,useEffect } from 'react';

const NavItem = ({ text }: any) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <li className="nav-item">
            <span
                className={isActive ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsActive(!!true)}>
                {text}
            </span>
        </li>
    )
}

export default NavItem
