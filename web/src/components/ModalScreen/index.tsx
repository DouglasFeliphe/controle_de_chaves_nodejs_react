import React, { ComponentType, Component, ReactNode, FormEvent } from 'react';

interface ModalProps {
    id: string
    title: string
    body?: ReactNode
    onSubmit: Function
    confirmButtonText?: string
}

const ModalScreen = (props: ModalProps) => {
    return (
        <div className="modal fade" id={props.id} >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form onSubmit={e => props.onSubmit(e)}>
                        <div className="modal-header">
                            <h4 className="modal-title">{props.title}</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            {props.body}
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" data-dismiss="modal" style={{ marginRight: 22 }}>{props.confirmButtonText}</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default ModalScreen;