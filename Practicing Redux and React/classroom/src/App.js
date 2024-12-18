import CarList from "./Components/CardList";
import CarSearch from "./Components/CardSearch";
import CarForm from "./Components/CarForm";

function App(){
    return (
        <div>
            <CarForm/>
            <CarSearch/>
            <CarList/>
        </div>
    )
}

export default App;