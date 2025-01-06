import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//Create action
export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue})=>{
    const response = await fetch("https://6773773d77a26d4701c554e3.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try{
        const result = await Response.json();
        return result;
    } catch(error){
        return rejectWithValue(error);
    }
})


export const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null,
        extraReducer: {
            [createUser.pending]: (state) => {
                state.loading = true;
            },
            [createUser.fulfilled]: (state) => {
                state.loading = false;
                state.users.push(action.payload)
            }
            [createUser.pending]: (state) => {
                state.loading = true;
            }
        }
    },
});

export const {addUser} = userDetail.actions;
export default userDetail.reducer;
