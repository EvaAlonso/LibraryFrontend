import { Link } from "react-router-dom";
import LibraryLogo from "../../../assets/images/library-logo.png";
import AdminButton from "../../atoms/AdminButton/AdminButton";

const Header = () => {
  return (
    <header className="header-container">
        <Link to={"/"}>
            <img className="logo-container" src={LibraryLogo} alt="library-logo"></img>
        </Link>
        <Link to={"/admin"}>
            <AdminButton />
        </Link>   
    </header>
  )
}

export default Header