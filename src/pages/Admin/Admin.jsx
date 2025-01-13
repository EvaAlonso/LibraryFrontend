import Form from "../../components/molecules/Form/Form"
import Header from "../../components/molecules/Header/Header"
import "../Admin/admin.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Admin = () => {
    return (
      <>
        <Header />
        <p className="title-form h1">Formulario</p>
        <Form />
      </>
    )
  }
  
  export default Admin