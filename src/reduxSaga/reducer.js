import { createSlice } from "@reduxjs/toolkit";


console.log("inside action/reducer")
const catSlice = createSlice({
  name: "cats",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {
    fetchData: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    fetchFailed: (state) => {state.isLoading=false},
  },
});
export const {fetchData,fetchSuccess,fetchFailed} = catSlice.actions;
export default catSlice;

