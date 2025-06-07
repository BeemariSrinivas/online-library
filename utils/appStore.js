import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookListSlice.js"
const appStore = configureStore({
    reducer:{
        bookList : bookReducer,
    }
});
export default appStore;