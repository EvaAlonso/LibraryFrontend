import BookCard from "../../components/molecules/BookCard/BookCard"
import Header from "../../components/molecules/Header/Header"

const Home = () => {
    return (
      <>
        <Header />
        <main className="home-page-container">
          {/* ADD MORE CARDS */}
          <BookCard />
        </main>
      </>
    )
  }
  
  export default Home