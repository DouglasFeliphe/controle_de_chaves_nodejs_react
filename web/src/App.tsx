import React, { useState, useEffect } from 'react';
import api from './services/api';
import ImgChave from './assets/img/chave.jpg';
import CreateKey from './pages/CreateKey';
import CreateUser from './pages/CreateUser';
import CreateReservation from './pages/CreateReservation';
import './App.css';

interface Keys {
  number: number
  name: string
}
interface Users {
  registration_number: number
  name: string
}

interface Reservations {
  id: number
  date: string
  user_name: string
  key_name: string
  key_number: number
  delivered_at: string
  returned_at: string
  status: boolean
}

function App() {

  const [keys, setKeys] = useState<Keys[]>([]);
  const [users, setUsers] = useState<Users[]>([]);
  const [reservations, setReservations] = useState<Reservations[]>();

  // listando as chaves
  useEffect(() => {
    api.get('keys/').then(response => {
      setKeys(response.data)

    })
  }, []);

  // listando os usuários
  useEffect(() => {
    api.get('users/').then(response => {
      setUsers(response.data)
    })
  }, []);

  // listando as reservas
  useEffect(() => {
    api.get('reservations/').then(response => {
      setReservations(response.data)
    })
  }, []);

  function handleKeyClick() {
    // alert('ok')
  }

  return (
    <>
      <h1 className="text-center">Controle de Chaves</h1>

      <nav className="navbar navbar-dark bg-dark justify-content-center ">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-4" type="text" placeholder="Filtrar por chave" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
        </form>
      </nav>

      <main role="main" className="container">
        {/* BOTÕES */}
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between">
            <button id="btn-adicionar" className="btn btn-success btn-rounded p-10" data-toggle="modal" data-target="#modal-create-key" ><b>+</b>
            Nova Chave
            </button>
            <button id="btn-adicionar" className="btn btn-success btn-rounded" data-toggle="modal" data-target="#modal-create-user" ><b>+</b>
              Novo Usuário
              </button>
          </div>
        </div>
        {/* CHAVES */}
        <div className="my-3 p-3 bg-white rounded shadow-sm ">
          <h6 className="border-bottom border-gray pb-2 mb-0">  </h6>

          <div className='row'>
            <div className="col-lg-12"></div>
            {keys.map(key => (
              <div className="col-lg-4 text-center" key={key.number}>
                < img key={key.number}
                  src={ImgChave}
                  className="img-chave"
                  data-toggle="modal"
                  data-target={'#modal-0' + key.number}
                />
                <h5>{key.name}</h5>
                <strong>{key.number}</strong>
                <br />
                <button className='btn btn-warning btn-rounded' data-toggle="modal" data-target="#modal-create-reservation">Reservar</button>
                {/* <ShowKey
                  id={'modal-0' + key.number}
                  key_name={key.name} /> */}
              </div>
            ))}
          </div>

        </div>



        <CreateKey />
        <CreateUser />
        <CreateReservation
          users={users}
        />

        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <h6 className="border-bottom border-gray pb-2 mb-0">Ùltimas Reservas</h6>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>User name</th>
                <th>Key name</th>
                <th>Key number</th>
                <th>Delivered at</th>
                <th>Returned at</th>
              </tr>
            </thead>
            <tbody>
              {reservations?.map(reservation => (
                <tr key={reservation.id}>
                  <td>{reservation.date}</td>
                  <td>{reservation.user_name}</td>
                  <td>{reservation.key_name}</td>
                  <td>{reservation.key_number}</td>
                  <td>{reservation.delivered_at}</td>
                  <td>{reservation.returned_at}</td>
                  <td>{reservation.status}</td>
                </tr>
              ))}
            </tbody>
          </table>



        </div>
      </main>
    </>

  );
}

export default App;
