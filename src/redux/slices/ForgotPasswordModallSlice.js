import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false };

const ForgotPasswordModalSlice = createSlice({
  name: "ForgotPasswordModal",
  initialState,
  reducers: {
    toggleForgotPasswordModal: (state) => {
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

export const { toggleForgotPasswordModal } = ForgotPasswordModalSlice.actions;

export default ForgotPasswordModalSlice.reducer;
export const selectForgotPasswordModal = (store) => store.ForgotPasswordModal.open;
