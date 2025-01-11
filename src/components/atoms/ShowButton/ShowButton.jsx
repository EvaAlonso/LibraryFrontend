import "./show-button.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const ShowButton = () => {
  return (
    <button className="show-btn-container mx-auto ">
      {/* Add Card Link */}
      <p className="show-btn-text">Show more</p> 
    </button>
  )
}

export default ShowButton