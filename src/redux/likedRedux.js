import {createSlice, current} from "@reduxjs/toolkit";

const likedSlice = createSlice({
    name: "liked",
    initialState: {
        paddles: [],
        quantity: 0,
    },
    reducers:{
        addLike:(state,action)=>{
            if (!(state.paddles.find((paddle) => paddle.id === action.payload.id))) {
                state.quantity += 1;
                state.paddles.push(action.payload);
                console.log("added")
            } else {
                console.log("couldnt add")
            }
        },
        removeLike:(state,action)=>{
            const index = state.paddles.findIndex((paddle) => paddle.id === action.payload.id);
            if(index > -1){
                state.quantity -= 1;
                state.paddles.splice(index, 1);
                console.log("removed")
            } else {
                console.log("couldnt remove")
            }
        },
    }
});

export const {addLike, removeLike} = likedSlice.actions
export default likedSlice.reducer;