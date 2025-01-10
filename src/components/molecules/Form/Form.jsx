import FileInput from "../../atoms/FileInput/FileInput.jsx";
import TextInput from "../../atoms/TextInput/TextInput.jsx";

import "./form.css";

const Form = () => {
  return (
    <form>
        <TextInput />
        <TextInput />
        <TextInput />
        <TextInput />
        <FileInput />
        <TextInput />
    </form>
  )
}

export default Form