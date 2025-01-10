import BookCard from "../../components/molecules/BookCard/BookCard"
import Header from "../../components/molecules/Header/Header"

const Home = () => {
    return (
      <>
        <Header />
        <main className="home-page-container">
          <div className="home-page-info-container">
            {/* ADD MORE CARDS */}
            <BookCard />
          </div>
        </main>
      </>
    )
  }
  
  export default Home