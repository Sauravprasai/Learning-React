import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book, onSubmit}){
    const[title, setTitle] = useState(book.title)
    const {editBookById} = useBooksContext();

    const handleEditChange = (event) =>{
        setTitle(event.target.value)
    }

    const handleSubmit= (event) => {
        event.preventDefault();
        editBookById(book.id, title);
        onSubmit();
    }
    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleEditChange} className="input"/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}

export default BookEdit;