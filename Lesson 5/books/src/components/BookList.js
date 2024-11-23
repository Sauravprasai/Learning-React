import BookShow from './BookShow'

function BookList({books, onDelete, onEdit}){
    const renderedBooks = books.map((book) => {
        return <BookShow key={books.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
    })

    return <div className='book-list'>{renderedBooks}</div>
}

export default BookList;