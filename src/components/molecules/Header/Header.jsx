import LibraryLogo from "../../../assets/images/library-logo.png";
import AdminButton from "../../atoms/AdminButton/AdminButton";

const Header = () => {
  return (
    <header>
        <img src={LibraryLogo} alt="library-logo"></img>
        <AdminButton />
    </header>
  )
}

export default Header