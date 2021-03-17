import React from "react";
import ModalCreateKey from "../../pages/Keys/CreateKey";
import ModalCreateUser from "../../pages/Users/CreateUser";


export default function ButtonCreate({ component }: any) {

  return (
    <>
      {
        component === 'Keys' ?
          <div className='float-right'>
            <button
              className="btn btn-primary btn-lg m-5"
              data-toggle="modal"
              data-target='#modal-create-key'>
              <i className="fas fa-plus"></i> Nova Chave
            </button>
            <ModalCreateKey></ModalCreateKey>
          </div >
          :
          <div className='float-right'>
            <button
              className="btn btn-primary btn-lg m-5"
              data-toggle="modal"
              data-target='#modal-create-user'>
              <i className="fas fa-plus"></i> Novo Usuário
            </button>
            <ModalCreateUser></ModalCreateUser>
          </div >
      }
    </>
  )
}
