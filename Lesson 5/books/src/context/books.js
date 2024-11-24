import {createContext, useState} from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({children}){
    const [books, setBooks] = useState([]);

    // Get all the books from API server
    const getBook = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data)
    }

    //Sending request to create a new book in API and add the response in Array
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
        title
        });

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    // Deleting Book from the API and updating book
    const deleteBookById = async (id) => {
        await axios.delete('http://localhost:3001/books/' + id);

        const updatedBooks = books.filter((book) =>{
        return book.id !== id;
        })
        setBooks(updatedBooks);
    }

    const editBookById = async (id, newTitle) =>{
        const response = await axios.put('http://localhost:3001/books/' + id,{
          title: newTitle
        })
         
        const updatedBooks = books.map((book) =>{
          if(book.id === id){
            return {...book, ...response.data}
          }
          return book;
        });
      
        setBooks(updatedBooks);
    }

    const valueToShare = {
        books,
        getBook,
        createBook,
        editBookById,
        deleteBookById
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
  </BooksContext.Provider>
}

export {Provider};
export default BooksContext;