import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userName: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserName(state,action) {
            state.userName = action.payload;
        }
    }
})

export const {updateUserName} = userSlice.actions;

export default userSlice.reducer;