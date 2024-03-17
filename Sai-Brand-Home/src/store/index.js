import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const saibrandStore =configureStore({
  reducer:{
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  }
});

export default saibrandStore;