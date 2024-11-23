import { useState } from "react";

function BookEdit({book, onSubmit}){
    const[title, setTitle] = useState(book.title)

    const handleEditChange = (event) =>{
        setTitle(event.target.value)
    }

    const handleSubmit= (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
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