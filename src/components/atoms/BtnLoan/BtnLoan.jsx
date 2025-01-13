import React, { useState } from 'react';
import axios from 'axios';

function BtnLoan({ bookId, setShowModal, setModalMessage, setReturnDate, setShowDate, setShowLoanForm }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleLoan = async () => {
    // Mostrar el formulario de préstamo cuando el botón es presionado
    setShowLoanForm(true);

    if (!name || !surname) {
      setModalMessage("Por favor, ingrese su nombre y apellido.");
      setShowModal(true);
      return;
    }

    try {
      // Hacer una solicitud al backend para obtener el memberId usando el nombre y apellido
      const response = await axios.get('/members', {
        params: { name: name, surname: surname }
      });

      // Verificar si se encontró el miembro
      if (response.status === 200 && response.data.length > 0) {
        const memberId = response.data[0].id; // Obtener el id del primer miembro en la respuesta

        // Realizar el préstamo con el bookId y el memberId
        const loanResponse = await axios.post('/loans', null, {
          params: {
            bookId: bookId,
            memberId: memberId
          }
        });

        if (loanResponse.status === 201) {
          // Calcular la fecha de devolución (un mes después)
          const currentDate = new Date();
          currentDate.setMonth(currentDate.getMonth() + 1);
          const formattedDate = currentDate.toISOString().split('T')[0]; // Formato YYYY-MM-DD
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
      <button className="btn btn-primary" onClick={handleLoan}>
        Prestar Libro
      </button>
    </div>
  );
}

export default BtnLoan;

