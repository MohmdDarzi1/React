import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false };

const RegesterSlice = createSlice({
  name: "RegesterModal",
  initialState,
  reducers: {
    toggleRegesterModal: (state) => {
      if (state.open === false) {
        state.open = true;

        return;
      } 
 else if (state.open === true) {
        state.open = false;
        return;
      }
    },
  },
});

export const { toggleRegesterModal } = RegesterSlice.actions;

export default RegesterSlice.reducer;
export const selectRegesterModal = (store) => store.RegesterSlice.open;
