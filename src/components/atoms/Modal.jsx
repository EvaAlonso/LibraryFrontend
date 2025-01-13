import React from 'react';

function Modal({ showModal, setShowModal, modalMessage }) {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Mensaje</h5>
            <button type="button" className="btn-close" onClick={handleCloseModal}></button>
          </div>
          <div className="modal-body">
            <p>{modalMessage}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
