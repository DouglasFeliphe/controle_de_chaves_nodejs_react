import React, { useState, useEffect } from "react";
import img_chave from '../../assets/chave.jpg';
import img_usuario from '../../assets/usuario.png';


function Card({ image, data }: any,) {

    return (
        <div className="card col-lg-4 dflex align-items-center p-3 ">
            <img className="card-img-top h-50 w-50"
                src={image}
                data-toggle="modal"
                data-target={'#modal-0' + data.number}
                alt='no_image' />
            <div className="card-body text-center">
                <h4 className="card-title">{data.name}</h4>
                <p className="card-text">N° {data.number | data.registration_number}</p>
                <button className="btn btn-warning">Reservar</button>
            </div>
        </div>
    );
}

export default Card

