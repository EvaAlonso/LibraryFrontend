import React, { useState } from 'react';
import axios from 'axios';


const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

function BtnLoan({ bookId, setShowModal, setModalMessage, setReturnDate, setShowDate }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleLoan = async () => {
    if (!name || !surname) {
      setModalMessage("Por favor, ingrese su nombre y apellido.");
      setShowModal(true);
      return;
    }

    try {
      
      const response = await axios.get('/members', {
        params: { name: name, surname: surname }
      });

      
      if (response.status === 200 && response.data.length > 0) {
        const memberId = response.data[0].id; 
        const loanResponse = await axios.post('/loans', null, {
          params: {
            bookId: bookId,
            memberId: memberId
          }
        });

        if (loanResponse.status === 201) {
          
          const currentDate = new Date();
          currentDate.setMonth(currentDate.getMonth() + 1);
          const formattedDate = formatDate(currentDate); 
          
          setReturnDate(formattedDate);
          setShowDate(true);
          setModalMessage(`El libro ha sido prestado con éxito. Fecha de devolución: ${formattedDate}`);
          setShowModal(true);
        }
      } else {
        setModalMessage("Miembro no encontrado.");
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage('Error al realizar el préstamo.');
      setShowModal(true);
    }
  };

  return (
    <div className="mb-3">
      <h5>Por favor, ingrese su nombre y apellido:</h5>
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
      <button className="btn btn-primary" onClick={handleLoan}>
        Prestar Libro
      </button>
    </div>
  );
}



export default BtnLoan;
