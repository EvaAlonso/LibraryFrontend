import React, { useState } from 'react';
import Header from "../Header/Header";
import BtnLoan from '../../atoms/BtnLoan/BtnLoan';
import BtnReturn from '../../atoms/BtnReturn/BtnReturn';
import Modal from '../../atoms/Modal'; 
import { formatDate } from '../../../utils/formateDate';
import "./book-card-detailed.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const BookCardDetailed = ({ bookId, title, available, loanId }) => {
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showDate, setShowDate] = useState(false);
  const [returnDate, setReturnDate] = useState('');
  const [loanDate, setLoanDate] = useState('');
  const [showLoanForm, setShowLoanForm] = useState(false); 

  const handleLoanSuccess = (loanDate, returnDate) => {
    setLoanDate(formatDate(new Date(loanDate)));
    setReturnDate(formatDate(new Date(returnDate))); 
    setShowDate(true);
  };

  return (
    <>
      <Header />

      <section>
        <main className="content-1 mt-5 mx-auto my-2">
          <div className="content-2">
            <div className="book-card-container-1 d-flex flex-column w-25 mt-5">
              <img src="https://picsum.photos/300/200" alt="" className="mx-auto mt-4" />
              <div className="book-card-detailed-page-container">
                <div className="book-card-detailed-info-container">
                  <div className="book-detailed-title-container">
                    <h3>{title}</h3>
                  </div>
                  <div className="book-detailed-description-container">
                    <p className="book-detailed-description">DESCRIPTION</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text d-flex flex-column">
              <div className="mx-4 my-5">
                <p className="h2">{title}</p>
              </div>
              <div className="mx-4 my-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut ducimus corrupti alias beatae quaerat facere nulla natus repudiandae voluptatum incidunt, eligendi explicabo quasi aliquid esse a, voluptate sunt animi!.</p>
              </div>
              <div className="mx-4">
                <p>AUTHOR: AHORA VIENE</p>
              </div>
            </div>

            
            <div className="mx-4">
              <BtnLoan
                bookId={bookId}
                setShowModal={setShowModal}
                setModalMessage={setModalMessage}
                setReturnDate={handleLoanSuccess}
                setShowDate={setShowDate}
                setShowLoanForm={setShowLoanForm} 
              />
              <BtnReturn
                bookId={bookId}
                loanId={loanId}
                setShowModal={setShowModal}
                setModalMessage={setModalMessage}
                setMessage={setMessage}
              />
            </div>

            {showDate && (
              <div className="mt-3 alert alert-success">
                <p>Fecha de préstamo: {loanDate}</p>
                <p>Fecha de devolución: {returnDate}</p>
              </div>
            )}

            {message && <div className="mt-3 alert alert-info">{message}</div>}

            
            {showLoanForm && (
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                modalMessage={modalMessage}
              />
            )}

          </div>
        </main>
      </section>
    </>
  );
};

export default BookCardDetailed;



