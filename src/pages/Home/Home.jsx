import BookCard from "../../components/molecules/BookCard/BookCard"
import Header from "../../components/molecules/Header/Header"
import "../Home/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Home = () => {
  return (
    <>
      <Header />
      <main className="content mt-5 mx-auto my-2">
        <div className="home-page-container">

          <div className="home-page-info-container">
            {/* ADD MORE CARDS */}
              


            <BookCard />
          </div>


        </div>
      </main>
    </>
  )
}

export default Home