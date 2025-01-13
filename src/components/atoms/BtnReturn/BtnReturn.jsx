import React from 'react';
import axios from 'axios';

function BtnReturn({ bookId, available, setShowModal, setModalMessage, setMessage }) {
  const handleReturn = async () => {
    
    if (available) {
      setModalMessage(`El libro no está prestado.`);
      setShowModal(true);
      return;
    }

    try {
    
      const response = await axios.get('/loans', {
        params: { bookId: bookId }
      });

      const loanId = response.data.loanId;

      if (!loanId) {
        setModalMessage('No se encontró ningún préstamo para este libro.');
        setShowModal(true);
        return;
      }

    
      const returnResponse = await axios.post('/loans/return', null, {
        params: { loanId: loanId }
      });

      if (returnResponse.status === 200) {
        setMessage('Préstamo devuelto con éxito!');
      }
    } catch (error) {
      setMessage('Error al devolver el préstamo.');
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleReturn}>
      Devolver Libro
    </button>
  );
}

export default BtnReturn;


