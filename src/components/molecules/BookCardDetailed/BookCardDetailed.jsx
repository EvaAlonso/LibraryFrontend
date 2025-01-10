import BookCard from "../BookCard/BookCard";
import "./book-card-detailed.css";

const BookCardDetailed = () => {
  return (
    <div className="book-card-detailed-page-container">
        <BookCard />
        <section className="book-card-detailed-info-container">
            <div className="book-detailed-title-container">
                <h3 className="book-detailed-title">TITLE</h3>
            </div>
           <div className="book-detailed-description-container">
                <p className="book-detailed-description">DESCRIPTION</p>
           </div>    
        </section>
    </div>
  )
}

export default BookCardDetailed