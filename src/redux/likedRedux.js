import {createSlice} from "@reduxjs/toolkit";

const likedSlice = createSlice({
    name: "liked",
    initialState: {
        paddles: [],
        quantity: 0,
    },
    reducers:{
        addLike:(state,action)=>{
            state.quantity += 1;
            state.paddles.push(action.payload);
        }
    }
});

export const {addLike} = likedSlice.actions
export default likedSlice.reducer;