import { useState } from "react";
import Header from "../../components/molecules/Header/Header";
import Table from "../../components/molecules/Table/Table";
import { readBookDB } from "../../service/LibraryService";
import { useEffect } from "react";
import { hourglass } from "ldrs";
// import "./Dashboard.css";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await readBookDB();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching books: ' + error.message);
        setLoading(false);
      }
    }
  }, []);

  const toggleAvaiability = (id) => {
    setBooks((prevBooks) => 
      prevBooks.map((book) => 
        book.id === id ? {...book, isAvailable: !book.isAvailable } : book 
      )
    );
  };

  if (loading) return hourglass.register();
  if (error) return <p>{error}</p>
  
    return (
      <>
        <Header />
        {
          loading ? 
          <l-hourglass
            size="40"
            bg-opacity="0.1"
            speed="1.75" 
            color="var(--color-4)"
          ></l-hourglass> :
          <Table books={books} onToggleAvaiability={toggleAvaiability}/>
        }
      </>
    )
  }
  
  export default Admin