import { Link } from "react-router-dom";
import LibraryLogo from "../../../assets/images/library-logo.png";
import AdminButton from "../../atoms/AdminButton/AdminButton";

const Header = () => {
  return (
    <header className="header-container">
        <Link to={"/"}>
            <div className="library-logo-container">
              <img className="library-logo" src={LibraryLogo} alt="library-logo"></img>
            </div>
        </Link>
        <Link to={"/admin"}>
          <div className="admin-button-container">
            <AdminButton />
          </div> 
        </Link>   
    </header>
  )
}

export default Header