import React from 'react';
import './Modal.css';
import 'bulma/css/bulma.css';

const Modal = ({modalStatus, closeModal, toggle}) => (
    <div className={`modal ${modalStatus}`}>
        <div className="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title is-large"><strong>..Time for a break !</strong></p>
                <button onClick={closeModal()} className="delete is-large"  aria-label="close"></button>
            </header>
            <section class="modal-card-body has-text-centered">
                <button className="button is-primary is-inverted is-large " onClick={toggle()} >Restart Timer</button>      
            </section>   
        </div>
    </div>
)

export default Modal;