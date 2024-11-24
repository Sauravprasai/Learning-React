import {useEffect} from 'react';
import BookCreate from './components/BookCreate.js'
import BookList from './components/BookList.js'
import useBooksContext from "./hooks/use-books-context.js";

function App() {
  const {getBook} = useBooksContext();

  // eslint-disable-next-xdvx,
  useEffect(() =>{
    getBook();
  }, [])

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate/>
      <BookList/>
    </div>
  );
}

export default App;
