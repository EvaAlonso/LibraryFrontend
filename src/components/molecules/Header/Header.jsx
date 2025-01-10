import { Link } from "react-router-dom";
import LibraryLogo from "../../../assets/images/library-logo.png";
import AdminButton from "../../atoms/AdminButton/AdminButton";

const Header = () => {
  return (
    <header>
        <Link to={"/"}>
            <img src={LibraryLogo} alt="library-logo"></img>
        </Link>
        <Link to={"/admin"}>
            <AdminButton />
        </Link>   
    </header>
  )
}

export default Header