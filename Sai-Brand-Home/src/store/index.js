import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";

const saibrandStore =configureStore({
  reducer:{
    items: itemsSlice.reducer
  }
});

export default saibrandStore;