import {useState, useEffect} from 'react';
import BookCreate from './components/BookCreate.js'
import BookList from './components/BookList.js'
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  // Get all the books from API server
  const getBook = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data)
  }

  //Stop from continously updating App
  useEffect(() =>{
    getBook();
  }, [])

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


  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook}/>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
    </div>
  );
}

export default App;
