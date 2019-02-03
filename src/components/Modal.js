import React from 'react';
import './Modal.css';
import 'bulma/css/bulma.css';

const Modal = ({modalStatus, closeModal, toggle}) => (
    <div className={`modal ${modalStatus}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
            <button onClick={toggle()} className="is-large">YOYO</button>
        </div>
        <button onClick={closeModal()} className="modal-close is-large" aria-label="close"></button>
    </div>
)

export default Modal;