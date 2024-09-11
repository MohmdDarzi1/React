import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false };

const signUpModalSlice = createSlice({
  name: "signUpModal",
  initialState,
  reducers: {
    toggleSignUpModal: (state) => {
      if (state.open === false) {
        state.open = true;
        return;
      } else if (state.open === true) {
        state.open = false;
        return;
      }
    },
  },
});

export const { toggleSignUpModal } = signUpModalSlice.actions;

export default signUpModalSlice.reducer;
export const selectSignUpModal = (store) => store.SignUpModal.open;
