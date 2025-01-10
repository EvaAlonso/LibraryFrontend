import ShowButton from "../../atoms/ShowButton/ShowButton.jsx";
import "./book-card.css";

const BookCard = () => {
  return (
    <div className="book-card-container">
        {/* IMG */}
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
        <ShowButton />
    </div>
  )
}

export default BookCard