import {createSlice} from '@reduxjs/toolkit';
import { submittingCard } from './cardSlice';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        grade: 0,
        rollNo: 0
    },
    reducers: {
        changeName(state, action){
            state.name = action.payload
        },
        changeGrade(state, action){
            state.grade = action.payload
        },
        changeRollNo(state, action){
            state.rollNo = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(submittingCard, (state, action)=>{
            state.name = '';
            state.grade = 0;
            state.rollNo = 0;
        })
    }
})

export const {changeName, changeGrade, changeRollNo} = formSlice.actions;
export const formReducer = formSlice.reducer;