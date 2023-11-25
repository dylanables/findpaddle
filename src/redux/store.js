import {configureStore} from "@reduxjs/toolkit";
import likedReducer from "./likedRedux";

export default configureStore({
    reducer: {
        liked: likedReducer,
    }
})