import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false};


const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    toggleLoginModal: (state) => {
      if (state.open === false) {
        state.open = true;
      
 
        return;
      }
        if (state.Login === true) {
          state.Login = false;
        
      } else if (state.open === true) {
        state.open = false;
        return;
      }
    },
  },
});

export const { toggleLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;
export const selectLoginModal = (store) => store.loginModal.open;
