import React from "react";
import ModalCreateKey from "../../pages/Keys/CreateKey";
import ModalCreateUser from "../../pages/Users/CreateUser";
import ModalCreateReservation from '../../pages/Reservations/CreateReservation';


export default function ButtonCreate({ modal }: any) {

  return (
    <>
      {
        modal === 'Keys' ?
          <div className='float-right'>
            <button
              className="btn btn-primary btn-lg m-5"
              data-toggle="modal"
              data-target='#modal-create-key'>
              <i className="fas fa-plus"></i> Nova Chave
            </button>
            <ModalCreateKey></ModalCreateKey>
          </div >
          : modal === 'Users' ?
            <div className='float-right'>
              <button
                className="btn btn-primary btn-lg m-5"
                data-toggle="modal"
                data-target='#modal-create-user'>
                <i className="fas fa-plus" /> Novo Usuário
              </button>
              <ModalCreateUser></ModalCreateUser>
            </div >
            :
            <div>
              <button
                className="btn btn-info  m-5"
                data-toggle="modal"
                data-target='#modal-create-reservation'>
                <i className="fas fa-plus" /> Reservar
            </button>
              <ModalCreateReservation ></ModalCreateReservation>
            </div>
      }
    </>
  )
}
