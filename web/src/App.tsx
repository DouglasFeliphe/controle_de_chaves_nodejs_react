import React from 'react';
import Menu from './components/Menu';
import './App.css';
interface Users {
  registration_number: number
  name: string
}

interface Reservations {
  id: number
  key_name: string
  key_number: number
  user_name: string
  user_registration_number: number
  created_at: string
  returned_at: string
  // status: boolean
}

function App() {
  
  // const [users, setUsers] = useState<Users[]>([]);
  // const [reservations, setReservations] = useState<Reservations[]>();

  // // listando os usuários
  // useEffect(() => {
  //   api.get('users/').then(response => {
  //     setUsers(response.data)
  //   })
  // }, []);

  // // listando as reservas
  // useEffect(() => {
  //   api.get('reservations/').then(response => {
  //     setReservations(response.data)
  //   })
  // }, []);


  // const StatusComponent = (reservation: Reservations) => {
  //   return (

  //     reservation.returned_at ?
  //       <td>
  //         <span className={`badge badge-success`}>
  //           {reservation.returned_at}
  //           <i className="fas fa-check ml-2"></i>
  //         </span>
  //       </td>
  //       :
  //       <td>
  //         <span className="badge badge-danger">
  //           <i className="fas fa-times"></i>
  //         </span>
  //       </td>
  //   )
  // }

  return (
    <>
      <Menu></Menu>
      {/* <h1 className="text-center">Controle de Chaves</h1>

      <nav className="navbar navbar-dark bg-dark justify-content-center ">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-4" type="text" placeholder="Filtrar por chave" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
        </form>
      </nav> */}


    </>
  );


}

export default App;
