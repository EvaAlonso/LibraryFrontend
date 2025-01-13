import { Link } from "react-router-dom";
import ShowButton from "../../atoms/ShowButton/ShowButton.jsx";
import "./book-card.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const BookCard = () => {
  return (
    <div className="book-card-container d-flex flex-column w-25 mt-5">
    
        {/* IMG */}
        <img src="https://picsum.photos/300/200" alt="" className="mx-auto mt-4" />
        <section className="book-card-info-container">
            <div className="book-title-container">
                <p className="book-title">TITLE</p>
            </div>
            <div className="book-author-container">
                <p className="book-author">AUTHOR</p>
            </div>
            <div className="book-genre-container">
                <p className="book-genre">GENRE</p>
            </div>
        </section>
        <Link to={"/BookCardDetailed"}>
            <ShowButton />
        </Link>
    </div>
  )
}

export default BookCard