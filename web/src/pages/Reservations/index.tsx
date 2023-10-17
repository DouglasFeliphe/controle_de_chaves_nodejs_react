import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import api from '../../services/api';

interface Reservations {
  id: number;
  key_name: string;
  key_number: number;
  user_name: string;
  user_registration_number: number;
  created_at: string;
  returned_at: string;
  // status: boolean
}

const Reservations = () => {
  const [reservations, setReservations] = useState<Reservations[]>();

  // listando as reservas
  useEffect(() => {
    api.get('reservations/').then((response) => {
      setReservations(response.data);
    });
  }, []);

  const StatusComponent = (reservation: Reservations) => {
    return reservation.returned_at ? (
      <td>
        <span className={`badge badge-success`}>
          {reservation.returned_at}
          <i className='fas fa-check ml-2'></i>
        </span>
      </td>
    ) : (
      <td>
        <span className='badge badge-danger'>
          <i className='fas fa-times'></i>
        </span>
      </td>
    );
  };

  return (
    <Menu>
      <div className='container mt-5 mb-5'>
        <h1 className='mb-5'>Reservas Realizadas</h1>
        <h6 className='border-bottom border-gray pb-2 mb-0'>
          Últimas Reservas
        </h6>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>N° Chave</th>
              <th>Nome</th>
              <th>Usuário</th>
              <th>N° Registro</th>
              <th>Criado em</th>
              <th>Devolvido em</th>
            </tr>
          </thead>
          <tbody>
            {reservations?.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.key_number}</td>
                <td>{reservation.key_name}</td>
                <td>{reservation.user_name}</td>
                <td>{reservation.user_registration_number}</td>
                <td>{reservation.created_at}</td>
                <StatusComponent {...reservation} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Menu>
  );
};

export default Reservations;
