import { useSelector, useDispatch } from "react-redux";
import { deletingCard } from "../Store";

function CarList() {
    const dispatch = useDispatch();

    // Access filtered cards from the Redux state
    const filteredCards = useSelector((state) => {
        const { data, searchedTerm } = state.cards;
        return data.filter((card) =>
            card.name.toLowerCase().includes(searchedTerm.toLowerCase())
        );
    });

    // Handle card deletion
    const handleDelete = (cardId) => {
        dispatch(deletingCard(cardId)); // Pass only the card's id
    };

    // Render the filtered cards with delete button
    const renderedCards = filteredCards.map((card) => (
        <div key={card.id} className="card">
            <label className="label">Name: {card.name}</label>
            <br />
            <label className="label">Roll No: {card.rollNo}</label>
            <br />
            <label className="label">Grade: {card.grade}</label>
            <button
                className="button is-danger delete-button"
                onClick={() => handleDelete(card.id)}
            >
                Delete
            </button>
        </div>
    ));

    return <div>{renderedCards}</div>;
}

export default CarList;
