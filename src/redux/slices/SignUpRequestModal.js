
import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false };

const SignUpRequestModalSlice = createSlice({
  name: "SignUpRequestModal",
  initialState,
  reducers: {
    toggleSignUpRequestModal: (state) => {
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

export const { toggleSignUpRequestModal } = SignUpRequestModalSlice.actions;

export default SignUpRequestModalSlice.reducer;
export const selectSignUpRequestModal = (store) => store.SignUpRequestModal.open;
