import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../Store";

function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.cards.searchedTerm;
    });

    const handleSearchTerm = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    };

    return (
        <div className="search-box">
            <label className="label">Search</label>
            <input
                className="input"
                value={searchTerm}
                onChange={handleSearchTerm}
                type="text"
                placeholder="Search by name..."
            />
        </div>
    );
}

export default CarSearch;
