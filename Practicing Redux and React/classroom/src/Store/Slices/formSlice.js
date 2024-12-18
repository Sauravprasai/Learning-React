import {createSlice} from '@reduxjs/toolkit';

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
    }
})

export const {changeName, changeGrade, changeRollNo} = formSlice.actions;
export const formReducer = formSlice.reducer;