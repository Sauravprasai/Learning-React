import { createSlice, nanoid } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        searchedTerm: '',
        data: []
    },
    reducers:{
        changeSearchTerm(state, action){
            state.searchedTerm = action.payload
        },
        submittingCard(state,action){
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                rollNo: action.payload.rollNo,
                grade: action.payload.grade
            })
        },
        deletingCard(state,action){
            const updatedCard = state.data.filter((card)=>{
                return card.id !== action.payload
            })
            state.data = updatedCard;
        }
    }
})

export const {changeSearchTerm, submittingCard, deletingCard} = cardSlice.actions;
export const cardReducer = cardSlice.reducer;