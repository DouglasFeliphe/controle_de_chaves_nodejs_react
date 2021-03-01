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

  // function handleKeyClick() {
  //   alert('ok')
  // }

  async function handleDeleteKey(_keyNumber: number) {

    try {
      await api.delete(`keys/${_keyNumber}/`)
      alert(`Chave ${_keyNumber} deletada com sucesso.`)

    } catch (error) {
      alert('Erro ao deletar chave, tente novamente.')

    }
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

      <div className="row">
        <aside className='col-sm-2 d-flex flex-column align-items-center'>
          {/* BOTÕES */}
          <button
            id="btn-nova-chave"
            className="btn btn-info rounded-circle"
            data-toggle="modal"
            data-target="#modal-create-key" >
            <i className="fas fa-plus"></i>
            Nova
            <br />
             Chave
          </button>
          <button
            id="btn-novo-usuario"
            className="btn btn-info rounded-circle"
            data-toggle="modal"
            data-target="#modal-create-user"
          >
            <i className="fas fa-plus"></i>
            Novo
            <br />
            Usuário
          </button>
        </aside>

        <main role="main" className="container col-sm-8">
          {/* CHAVES */}
          <div className="my-3 p-3 bg-white rounded shadow-sm ">
            <h6 className="border-bottom border-gray pb-2 mb-0">  </h6>

            <div className='row'>
              <div className="col-lg-12"></div>
              {keys.map(key => (
                <div key={key.number} className="col-lg-4 text-center">
                  <img
                    src={ImgChave}
                    className="img-chave"
                    data-toggle="modal"
                    data-target={'#modal-0' + key.number}
                    alt='no_image'
                  />
                  <button onClick={() => handleDeleteKey(key.number)} className="fas fa-times"></button>
                  <h5>{key.name}</h5>
                  <strong>{key.number}</strong>
                  <br />
                  <button className='btn btn-warning btn-rounded' data-toggle="modal" data-target="#modal-create-reservation">Reservar</button>
                </div>
              ))}
            </div>

          </div>

          {/* MODALS */}
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

        <aside className="col-sm-2">
        </aside>

      </div>
    </>
  );
}

export default App;
