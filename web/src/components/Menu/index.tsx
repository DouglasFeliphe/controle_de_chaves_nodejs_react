import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you want to use

const Menu = ({ children }: any) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    // profilePicture: 'path-to-profile-picture.jpg',
    profilePicture: 'https://i.pravatar.cc/300?u=fake@pravatar.com',
    isOnline: true, // Set this to true or false based on user's online status
  });

  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* Dark Sidebar */}

        <nav
          id='sidebar'
          className='col-md-2 d-md-block sidebar bg-dark'
          style={{ height: '100vh' }}
        >
          <div className='p-3'>
            <h3 className='text-white '>Controle de Chaves</h3>
          </div>

          {/* User Info Header */}
          <header className='text-white border-bottom border-top border-1 border-dashed p-3'>
            <div className='d-flex flex-column align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src={user.profilePicture}
                  alt='User Profile'
                  className='rounded-circle mr-2'
                  width='40'
                  height='40'
                />
                <div>
                  <h6 className='mb-0'>{user.name}</h6>
                  <small>{user.email}</small>
                </div>
              </div>
              {/* User logged status */}
              <div className='mt-2 d-flex justify-content-center align-items-center'>
                <div className='badge badge-success rounded-circle d-inline-block p-2' />
                <small className='mb-0 ml-2'>
                  {user.isOnline ? 'Online' : 'Offline'}
                </small>
              </div>
            </div>
          </header>

          <div className='position-sticky p-3'>
            <ul className='nav flex-column'>
              <li className='nav-item d-flex justify-content-between align-items-center'>
                <a className='nav-link active' href='/keys'>
                  <FontAwesomeIcon icon={faKey} /> Chaves
                </a>
                <span className='badge badge-primary badge-pill'>5</span>
              </li>
              <li className='nav-item d-flex justify-content-between align-items-center'>
                <a className='nav-link' href='/reservations'>
                  <FontAwesomeIcon icon={faCalendar} /> Reservas
                </a>
                <span className='badge badge-success badge-pill'>5</span>
              </li>
              <li className='nav-item d-flex justify-content-between align-items-center'>
                <a className='nav-link' href='/users'>
                  <FontAwesomeIcon icon={faUsers} /> Usuários
                </a>
                <span className='badge badge-info badge-pill'>5</span>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Menu;
