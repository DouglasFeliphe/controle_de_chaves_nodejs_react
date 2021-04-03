import React, { FormEvent } from 'react';

interface ModalProps {
    children?: React.ReactNode
    id: string
    title: string
    onSubmit(event: FormEvent): void
}

const ModalScreen = (props: ModalProps) => {

    return (
        <div className="modal fade" id={props.id} >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form onSubmit={props.onSubmit}>

                        <div className="modal-header">
                            <h4 className="modal-title">{props.title}</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal">
                                &times;
                            </button>
                        </div>

                        <div className="modal-body p-5 ">
                            {props.children}
                        </div>

                        <div className="modal-footer">
                            <button type="submit"
                                className="btn btn-success"
                            // data-dismiss="modal"
                            >
                                Salvar
                            </button>
                            <button type="button"
                                className="btn btn-danger"
                                data-dismiss="modal">
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default ModalScreen;