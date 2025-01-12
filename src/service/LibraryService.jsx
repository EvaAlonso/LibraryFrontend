import axios from "axios"; 
import REACT_APP_LIBRARY_API from "../../.env";

const libraryAPI = REACT_APP_LIBRARY_API;

// Create
const createBook = async (newBook) => {
    const response = await axios.post(libraryAPI, newBook);
    return response.data;
};

// Read 
const readBookDB = async () => { 
    const response = await axios.get(libraryAPI); 
    return response.data; 
};

// Update
const updateBook = async (id, updatedBook) => {
    const response = await axios.put(`${libraryAPI}/${id}`, updatedBook);
    return response.data;
};

// Delete
const deleteBook = async (id) => {
    const response = await axios.delete(`${libraryAPI}/${id}`);
    return response.data;
};

//ReadById 
const readBookById = async (id) => {
    const response = await axios.get(`${libraryAPI}/${id}`);
    return response.data;
};

export { createBook, readBookDB, updateBook, deleteBook, readBookById};