import Create from "./components/Create";
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Create/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;