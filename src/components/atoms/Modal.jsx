import React, { useState } from 'react';

function Modal({ showModal, setShowModal, modalMessage }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} onClick={closeModal}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Formulario de préstamo</h5>
            <button type="button" className="close" onClick={closeModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {modalMessage && <p>{modalMessage}</p>}

            
            {modalMessage && modalMessage === 'Por favor, ingrese su nombre y apellido.' && (
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Apellido"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

