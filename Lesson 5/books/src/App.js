import {useState} from 'react';
import BookCreate from './components/BookCreate.js'
import BookList from './components/BookList.js'

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books, {
        id:Math.round(Math.random() * 99999),
        title},
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) =>{
      return book.id !== id;
    })
    setBooks(updatedBooks);
  }

  const editBookById = (id, newTitle) =>{
    const updatedBooks = books.map((book) =>{
      if(book.id === id){
        return {...book, title:newTitle}
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
