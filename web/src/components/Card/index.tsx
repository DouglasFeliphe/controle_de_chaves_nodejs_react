import React from "react";

export default function Card({ image, data, children }: any) {

    return (
        <div className="card dflex align-items-center py-3">
            <img className="card-img-top w-75"
                src={image}
                data-toggle="modal"
                data-target={'#modal-0' + data.number}
                alt='no_image' />
            <div className="card-body text-center">
                <h4 className="card-title">{data.name}</h4>
                <p className="card-text">N° {data.number | data.registration_number}</p>
                {children}
            </div>
        </div>
    )
};




