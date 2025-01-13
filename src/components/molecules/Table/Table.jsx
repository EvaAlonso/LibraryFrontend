import React, { useState } from 'react';
import Switch from "react-switch";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";

const Table = ({ books, onToggleAvaiability }) => {
    const [isAvailable, setIsAvailable] = useState(false);

  return (
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">IMG_URL</th>
            <th scope="col">ISBN</th>
            <th scope="col">Available</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                books.map((book) => (
                    <tr key={book.id}>
                        <th scope="row">{book.id}</th>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.cover_url}</td>
                        <td>{book.isbn}</td>
                        <td>
                            <Switch
                                onChange={() => onToggleAvaiability(book.id)}
                                checked={book.isAvailable}
                                onColor='#D4F5F5'
                                offColor='#747578'
                                uncheckedIcon={!isAvailable}
                                height={20}
                                width={30}
                            />
                        </td>
                        <td>
                            <section>
                                <button type="button" class="btn btn-info"><FaEye/></button> //TODO: redirigir a viewBookDetail
                                <button type="button" class="btn btn-warning"><FaPen/></button> //TODO: redirigir a formulario
                                <button type="button" class="btn btn-danger"><FaTrash/></button> //TODO: redirigir a dashboard con el libro eliminado
                            </section>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>

  )
}

export default Table