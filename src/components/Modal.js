import React from 'react';
import 'bulma/css/bulma.css';

const Modal = ({modalStatus, closeModal}) => (
    <div className={`modal ${modalStatus}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
        blablabkla
        </div>
        <button onClick={closeModal()} className="modal-close is-large" aria-label="close"></button>
    </div>
)

export default Modal;