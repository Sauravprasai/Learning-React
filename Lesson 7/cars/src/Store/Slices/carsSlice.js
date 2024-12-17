import { createSlide, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlide({
    name: 'cars',
    initialState: {
        searchTerm : "",
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        },
        addCar(state, action){
            //Assumption :
            //action.payload === { name: 'Ford', cost: 140 }
            state.cars.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCar(state, action){
            //Assumption :
            //action.payload === id of the car that we want to remove
            const updated = state.cars.filter((car)=>{
                return car.id !== action.payload
            });
            state.cars = updated;
        }
    }
})

export const {removeCar, addCar, changeSearchTerm} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;