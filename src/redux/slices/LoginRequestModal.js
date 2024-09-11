
import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false };

const LoginRequestModalSlice = createSlice({
  name: "LoginRequestModal",
  initialState,
  reducers: {
    toggleLoginRequestModal: (state) => {
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

export const { toggleLoginRequestModal } = LoginRequestModalSlice.actions;

export default LoginRequestModalSlice.reducer;
export const selectLoginRequestModal = (store) => store.LoginRequestModal.open;
