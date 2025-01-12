import Header from "../Header/Header";
import "./book-card-detailed.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const BookCardDetailed = () => {
  return (
    <>

      <Header>
      </Header>
      <section>
        <main className="content-1 mt-5 mx-auto my-2">

          <div className="content-2">
            <div className="book-card-container-1 d-flex flex-column w-25 mt-5">
              <img src="https://picsum.photos/300/200" alt="" className="mx-auto mt-4" />
              < div className="book-card-detailed-page-container">
                <div className="book-card-detailed-info-container">
                  <div className="book-detailed-title-container">
                    <h3>TITLE</h3>
                  </div>
                  <div className="book-detailed-description-container">
                    <p className="book-detailed-description">DESCRIPTION</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="text d-flex flex-column">
              <div className=" mx-4 my-5">
                <p className="h2">TITLE.</p>
              </div>
              <div className="mx-4 my-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut ducimus corrupti alias beatae quaerat facere nulla natus repudiandae voluptatum incidunt, eligendi explicabo quasi aliquid esse a, voluptate sunt animi!.</p>
              </div>
              <div className="mx-4">
                <p>AUTHOR: AHORA VIENE</p>
              </div>
            </div>

          </div>
        </main>

      </section>
    </>
  )

}

export default BookCardDetailed