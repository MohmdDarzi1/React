import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false};


const RessetPassModalSlice = createSlice({
  name: "RessetPassModal",
  initialState,
  reducers: {
    toggleRessetPassModal: (state) => {
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

export const { toggleRessetPassModal } = RessetPassModalSlice.actions;

export default RessetPassModalSlice.reducer;
export const selectRessetPassModal = (store) => store.RessetPassModal.open;
