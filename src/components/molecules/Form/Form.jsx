import TextInput from "../../atoms/TextInput/TextInput.jsx";

import "./form.css";

const Form = () => {
  return (
    <form>
        <label htmlFor="title">
            <TextInput />
        </label>
        <label htmlFor="isbn">
            <TextInput />
        </label>
        <label htmlFor="author">
            <TextInput />
        </label>
        <label htmlFor="genre">
            <TextInput />
        </label>
        <label htmlFor="img-url">
            <TextInput />
        </label>
        <label htmlFor="description">
            <TextInput />
        </label>
    </form>
  )
}

export default Form